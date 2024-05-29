export class Router {
    routes = {}

    add(routeName, link) {
        this.routes[routeName] = link
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();
        window.history.pushState({}, '', event.target.href)
        this.handle()
    }

    handle() {
        const {pathname} = window.location
        const route = this.routes[pathname] || this.routes[404]
    
       fetch(route)
        .then(response => response.text())
        .then(html => {
            document.getElementById('pages').innerHTML = html
        })

        this.changeBg()
        this.linkBold()
    }

    changeBg() {
        const {pathname} = window.location
        const body = document.querySelector('body')
    
        if(pathname === '/') {
            body.classList.add('home')
            body.classList.remove('universo')
            body.classList.remove('exploracao')
        }

        if(pathname === '/universo') {
            body.classList.add('universo')
            body.classList.remove('home')
            body.classList.remove('exploracao')
        } 
        
        if (pathname === '/exploracao') {
            body.classList.add('exploracao')
            body.classList.remove('universo')
            body.classList.remove('home')
        }   
    }

    linkBold() {
        const {pathname} = window.location
        const links = document.querySelectorAll('a')
        links.forEach(link => {
            if(link.pathname === pathname) {
                link.classList.add('active')
            } else {
                link.classList.remove('active')
            }
        })
    }
}