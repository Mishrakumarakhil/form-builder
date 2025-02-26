import { InputProps } from "../../types/inputInterface";
import type React from "react"
import { useState, useRef, useEffect } from "react"
import "./Select.css"

interface SelectInputProps extends InputProps {
  options: {
    options?: any; name: string; label: string
  }[];
}

export default function CustomSelect({
  label,
  value,
  options,
  error,
  questionId,
  name,
  updateQuestion,
}: SelectInputProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({})
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleGroup = (groupName: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setOpenGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }))
  }

  const handleSelect = (optionValue: string) => {
    updateQuestion(questionId, name, optionValue)
    setIsOpen(false)
  }

  const getCurrentLabel = () => {
    for (const option of options) {
      if (option.options) {
        const subOption = option.options.find((sub: any) => sub.name === value)
        if (subOption) return subOption.label
      } else if (option.name === value) {
        return option.label
      }
    }
    return ""
  }

  return (
    <div className="custom-select" ref={selectRef}>
      <div
        className={`select-input ${error ? "error" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={0}
      >
        {getCurrentLabel() || (error ? error : "Question type*")}
        <span className="dropdown-arrow">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 4.5L6 8L9.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <label className="select-input-label">{label}</label>

      {isOpen && (
        <div className="select-dropdown" role="listbox">
          {options.map((group) => {
            if (group.options) {
              return (
                <div key={group.name} className="group-container">
                  <div
                    className="group-header"
                    onClick={(e) => toggleGroup(group.name, e)}
                  >

                    <span className="group-label">{group.label}</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`toggle-icon ${openGroups[group.name] ? "open" : ""}`}
                    >
                      <path
                        d="M4.5 2.5L8 6L4.5 9.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {openGroups[group.name] && (
                    <div className="group-options">
                      {group.options.map((option: any) => (
                        <div
                          key={option.name}
                          className={`option ${value === option.name ? "selected" : ""}`}
                          onClick={() => handleSelect(option.name)}
                          role="option"
                          aria-selected={value === option.name}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <div
                key={group.name}
                className={`option ${value === group.name ? "selected" : ""}`}
                onClick={() => handleSelect(group.name)}
                role="option"
                aria-selected={value === group.name}
              >
                {group.label}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
