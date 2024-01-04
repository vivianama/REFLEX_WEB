import reflex as rx
import constants as constants
import mi_pagina_web.styles.styles as styles
from mi_pagina_web.styles.styles import Size, TextColor


def footer() -> rx.Component:
    return rx.hstack(
        rx.center(
            rx.vstack(
                rx.text(
                    "Mi pagina web",
                    font_size=Size.SMALL.value,
                    margin_bottom=Size.MEDIUM.value
                ),
                rx.link(
                    "Creado con reflex ",
                    rx.box(class_name="nes-icon is-small heart"),
                    href=constants.LINKEDIN_URL,
                    is_external=True,
                    font_size=Size.SMALL.value,
                    color=TextColor.TERTIARY.value
                ),
                align_items="start",
                spacing=Size.MEDIUM.value
            ),
            rx.spacer(),
            rx.box(class_name="nes-octocat animate"),
            width="80%"
        ),
        padding_bottom=Size.BIG.value,
        style=styles.max_width_style
    )