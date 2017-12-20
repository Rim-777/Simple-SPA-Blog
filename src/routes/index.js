import setPostRoutes from 'routes/Posts'
import setPagesRoutes from 'routes/Pages'
import setErrorsRoutes from 'routes/Errors'

export default ()=> ([
        setPostRoutes().postRoute,
        setPostRoutes().postsRoute,
        setPagesRoutes().aboutPageRoute,
        setErrorsRoutes().error404Route
    ]
)
