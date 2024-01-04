import reflex as rx
import datetime
import constants as constants
import mi_pagina_web.styles.styles as styles
from mi_pagina_web.styles.styles import Size, Color, TextColor
from ..components.header_text import header_text
from ..components.button import button


def author() -> rx.Component:
    return rx.vstack(
        header_text(
            "like",
            "Hola, mi nombre es Vivian Acevedo"
        ),
        rx.flex(
            rx.avatar(
                name="Viviana Acevedo",
                size="2xl",
                src="foto_perfil.jpg",
                bg=Color.PRIMARY.value,
                padding="2px",
                border="4px",
                border_color=Color.SECONDARY.value,
                margin_right=Size.SMALL.value,
                margin_bottom=Size.SMALL.value
            ),
            rx.vstack(
                    rx.span(
                    "Soy apasionada por la innovación y las tecnologías ágiles, con un enfoque colaborativo en la gestión de equipos de desarrollo de software. Mi objetivo es fusionar la tecnología con las necesidades y expectativas de las personas, basándome en principios y valores sólidos. Cuento con una sólida experiencia en liderazgo de equipos ágiles, impulsando la entrega exitosa de proyectos y fomentando un entorno de trabajo motivador y colaborativo. ",
                    rx.span(
                        "Aqui puedes saber mas de mi",
                        color=TextColor.ACCENT.value,
                        font_size=Size.DEFAULT.value
                    ),
                    "."
                ),
                _author_buttons(),
                width="100%",
                align_items="start"
            ),
            align_items="start",
            spacing=Size.BIG.value,
            direction=styles.FLEX_DIRECTION
        ),
        style=styles.max_width_style
    )


def _author_buttons() -> rx.Component:
    return rx.stack(
        button(
            "Linkedin",
            constants.LINKEDIN_URL
        ),
        button(
            "Github",
            constants.GITHUB_URL
        ),
        align_items="start",
        direction=styles.FLEX_DIRECTION
    )


def _experience() -> int:
    return datetime.date.today().year - 2010