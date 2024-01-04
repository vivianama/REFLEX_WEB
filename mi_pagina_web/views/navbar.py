import reflex as rx
from mi_pagina_web.styles.styles import Size, Color
from mi_pagina_web.components.link_icon import link_icon
import constants as constants

def navbar() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.link(
                 "",
                class_name=f"nes-icon is-medium star",
                href=constants.GITHUB_URL,
                is_external=True
            ),
            rx.text("Viviana Acevedo"),
            rx.spacer(),
            rx.tablet_and_desktop(
                link_icon(
                    "linkedin",
                    constants.LINKEDIN_URL
                )
            ),
            link_icon(
                "github",
                constants.GITHUB_URL
            ),
            width="100%"
        ),
        bg=Color.PRIMARY.value,
        position="sticky",
        border_bottom=f"0.25em solid {Color.SECONDARY.value}",
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0",
        width="100%"
    )
