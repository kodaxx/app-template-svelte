import Home from './routes/Home.svelte'
import Lorem from './routes/Lorem.svelte'
import NotFound from './routes/NotFound.svelte'

export default {
    // Exact path
    '/': Home,
    '/lorem/:repeat': Lorem,
    // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // Wildcard parameter
    // '/book/*': Book,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
}