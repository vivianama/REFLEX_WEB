"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config
import reflex as rx
import mi_pagina_web.styles.styles as styles
from mi_pagina_web.styles.styles import Size
from  mi_pagina_web.views.navbar import navbar
from mi_pagina_web.views.instructions import instructions
from mi_pagina_web.views.projets import projects
from mi_pagina_web.views.author import author
from mi_pagina_web.views.header import header
from mi_pagina_web.views.footer import footer

def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                author(),
                projects(),
                footer(),
                 width="100%",
                spacing=styles.Size.VERY_BIG.value
            )
        )

    )

app = rx.App(   
 stylesheets=styles.STYLESHEETS,
 style=styles.BASE_STYLE
)
app.add_page(index,
              title="CV Viviana Acevedo", 
              description="Esta es mi página profesional")

app.compile()
