const storageAvailable = () => {
  try {
    const key = '__storage_test__'
    window.localStorage.setItem(key, key)
    window.localStorage.removeItem(key)
    return true
  } catch (e) {
    return false
  }
}

export function useLocalStorage(key) {
  const isLocalStorageAvailable = storageAvailable()

  const storedValue = ref(isLocalStorageAvailable ? window.localStorage.getItem(key) : null)

  const setItem = (key, value) => {
    storedValue.value = value
    if (isLocalStorageAvailable) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }
  const getItem = (key) => {
    if (isLocalStorageAvailable) {
      return JSON.parse(window.localStorage.getItem(key))
    }
  }
  const removeItem = (key) => {
    storedValue.value = null
    if (isLocalStorageAvailable) {
      return window.localStorage.removeItem(key)
    }
  }

  const clearStorage = () => {
    if (isLocalStorageAvailable) {
      return window.localStorage.clear()
    }
  }

  return {
    storedValue,
    setItem,
    getItem,
    removeItem,
    clearStorage
  }
}
