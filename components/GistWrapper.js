import React from 'react'

const GistWrapper = ({ getGist, path, onChange, children }) => {
  React.useEffect(
    () =>
      (async () => {
        if (getGist && path.length >= 19 && path.indexOf('.') === -1) {
          try {
            let { content: code, language } = await getGist(path)
            if (language) {
              language = language.toLowerCase()
            }
            onChange({ language, code })
          } catch (e) {
            // eslint-disable-next-line
            console.log(e)
          }
        }
      })(),
    []
  )

  return children
}

export default GistWrapper
