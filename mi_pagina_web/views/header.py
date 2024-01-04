import reflex as rx
import constants as constants
import mi_pagina_web.styles.styles as styles
from mi_pagina_web.styles.styles import Size, TextColor
from mi_pagina_web.components.button import button

def header() -> rx.Component:
    return rx.vstack(
        rx.heading(
            "Viviana Acevedo",
            size="lg",
            padding_bottom=Size.DEFAULT.value
        ),
        rx.flex(
            rx.image(
                src="foto_perfil.jpg",
                alt="FotoPerfil",
                width="16em",
                height="16em",
                margin_right=Size.BIG.value
            ),
            rx.vstack(
                rx.span(
                    "Apasionada por la innovación y las tecnologías ágiles, con un enfoque colaborativo en la gestión de equipos de desarrollo de software. Mi objetivo es fusionar la tecnología con las necesidades y expectativas de las personas, basándome en principios y valores sólidos. Cuento con una sólida experiencia en liderazgo de equipos ágiles, impulsando la entrega exitosa de proyectos y fomentando un entorno de trabajo motivador y colaborativo. ",
                    rx.span(
                        "En constante aprendizaje",
                        color=TextColor.ACCENT.value,
                        font_size=Size.DEFAULT.value
                    ),
                    "!"
                ),
                button(
                    "start",
                    constants.GITHUB_URL
                ),
                align_items="start"
            ),
            direction=styles.FLEX_DIRECTION
        ),
        padding_top=Size.VERY_BIG.value,
        style=styles.max_width_style
    )