import reflex as rx
import constants as constants
import mi_pagina_web.styles.styles as styles
from mi_pagina_web.styles.styles import TextColor
from mi_pagina_web.components.button import button


def instructions() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text(
                "¿Cómo funciona el evento?",
                class_name="title",
                color=TextColor.ACCENT.value
            ),
            rx.span(
                "• Del 1 al 24 de diciembre descubriré cada día un nuevo regalo en el calendario."),
            rx.span("• Puedes participar desde cualquier parte del mundo."),
            rx.span("• Sólo tendrás que hacer Retweet a la publicación que enlazaré desde esta web. Tu cuenta de Twitter/X tiene que ser pública."),
            button(
                "Linkedin",
                constants.LINKEDIN_URL
            ),
            rx.span(
                "• Al día siguiente realizaré el sorteo de forma pública y compartiré el ganador en la web y en Twitter/X."
            ),
            rx.span(
                "• ¡Vuelta a empezar! Publicaré un nuevo regalo y comenzará de nuevo el proceso."
            ),
            class_name="nes-container is-dark with-title",
            align_items="start",
            width="100%"
        ),
        style=styles.max_width_style
    )