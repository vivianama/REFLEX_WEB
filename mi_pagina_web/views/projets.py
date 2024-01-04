import reflex as rx
import constants as constants
import mi_pagina_web.styles.styles as styles
from mi_pagina_web.styles.styles import Size
from mi_pagina_web.styles.colors import TextColor
from mi_pagina_web.components.header_text import header_text
from mi_pagina_web.components.button import button
from mi_pagina_web.components.day import day

_gifts = [
    ( "Projecto en Reflex",
        constants.GITHUB_URL,
    ),
    (
        "Projecto en React Js",
        constants.GITHUB_URL
    ),
    (
        "Projecto en Power BI",
        constants.GITHUB_URL
    ),
    (
        "Projecto en Power BI",
        constants.GITHUB_URL
    ),
    (
        "Projecto en Power BI",
        constants.GITHUB_URL
    ),
    (
        "Projecto en Python",
        constants.GITHUB_URL
    )
]
_current_day = len(_gifts) - 1


def projects() -> rx.Component:
    return rx.vstack(
        header_text(
            "nes-icon trophy is-small", 
            "Mis proyectos",
            rx.box(class_name="nes-icon is-small heart")
        ),
         rx.vstack(
            rx.span(
                "Estos proyectos simbolizan mi incursión en diversos lenguajes de programación, motivada por mi profunda pasión por la programación. A pesar de que mi rol actual no me permite involucrarme directamente en la programación, siempre me mantengo cercano al área de desarrollo. Para mí, programar es más que un trabajo, es mi pasatiempo" ),
            rx.hstack(
                align_items="start",
                flex_direction=styles.FLEX_DIRECTION
            ),
            class_name="nes-container is-dark",
            align_items="start",
            width="100%"
        ),
        rx.responsive_grid(
            *[
                day(
                    number + 1,
                    _gift_name(number),
                    _gift_url(number),
                    True, 
                )
                for _, number in enumerate(range(0, _current_day + 1))
            ],
            columns=[3, 3, 4, 5, 6],
            spacing=Size.DEFAULT.value,
            width="100%",
            padding_y=Size.BIG.value,
    ),
        rx.script(src="/js/countdown.js"),
        style=styles.max_width_style

    )


def _gift_name(gift) -> str:
    gift_index = gift
    if len(_gifts) > gift_index:
        return _gifts[gift_index][0]
    return ""


def _gift_url(gift) -> str:
    gift_index = gift
    if len(_gifts) > gift_index:
        return _gifts[gift_index][1]
    return ""


def _gift_info(gift) -> str:
    gift_index = gift
    if len(_gifts) > gift_index:
        return _gifts[gift_index][2]
    return ""