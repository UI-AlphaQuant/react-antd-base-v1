import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

import Forbidden from '../Forbidden/Forbidden'
import PageNotFound from '../PageNotFound/PageNotFound'
import ServerError from '../ServerError/ServerError'

const RouteError = () => {
  const error = useRouteError()

  // Router-thrown responses (throw new Response)
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <PageNotFound />

      case 403:
        return <Forbidden />

      default:
        return <ServerError error={error} />
    }
  }

  // JS runtime errors
  if (error instanceof Error) {
    console.error(error)
    return <ServerError error={error} />
  }

  // Fallback safety
  return <ServerError error={error} />
}

export default RouteError
