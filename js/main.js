import { Router } from "./routes.js"
import './actions.js'

const router = new Router()
router.add('/', 'pages/home.html')
router.add('/universo', 'pages/universo.html')
router.add('/exploracao', 'pages/exploracao.html')
router.add(404, 'pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

