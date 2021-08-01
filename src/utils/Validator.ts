const REGEX_VALID_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export function validateRegex(input, regex) {
  if (regex.test(input)) {
    return true
  }
  return false
}
export function emailIdValidator(emailId) {
  emailId = emailId && emailId.trim()
  if (emailId &&  emailId.length === 0) {
      return false
  }
  if (validateRegex(emailId, REGEX_VALID_EMAIL)) {
      return true
  }
  return false

}

export function passwordValidator(password) {
  if (password && password.length < 6) {
      return false
  }
  return true
}