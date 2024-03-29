Структура проекта основана на методологии SMASCC: http://smacss.com/, «масштабируемая и модульная архитектура для CSS» (Scalable and Modular Architecture for CSS).

Основная цель подхода — уменьшение количества кода и на упрощение поддержки кода.

В SMACSS существует пять типов категорий:

Base rules — базовые стили. Это стили основных элементов сайта — body, input, button, ul, ol и т.п. В этой секции используются в основном селекторы тэгов и атрибутов, классы — в исключительных случаях (например, если у вас стилизованные JavaScript’ом селекты);

Layout rules — стили макета. Здесь находятся стили глобальных элементов размеры шапки, футера, сайдбара и т.п. Джонатан предлагает использовать здесь id в селекторах, так как эти элементы не будут встречаться более 1 раза на странице. Однако автор статьи считает это плохой практикой (каждый раз, когда в стилях появляется id селектор, где-то в мире грустит котенок). Используйте классы и будет вам счастье.

Modules rules — стили модулей, то есть блоков, которые могут использоваться несколько раз на одной странице. Для классов модулей не рекомендуется использовать id и селекторы тэгов (для многократного использования и независимости от контекста соответственно).

State rules — стили состояния. В этом разделе прописываются различные состояния модулей и скелета сайта. Это единственный раздел, в котором допустимо использование ключевого слова «!important».

Theme rules — оформление. Здесь описываются стили оформлений, которые со временем, возможно, нужно будет заменить (так удобно делать, например, новогоднее оформление; для html-тем, выставленных на продажу такие стили позволяют переключать цветовую гамму и т.п.).

Правила именования
Разделение правил на пять категорий, соглашение об именах выгодно для быстрого понимания того, к какой категории принадлежит конкретный стиль, и к ее роли в общей структуре страницы. В крупных проектах более вероятно, что стили будут разбиты на несколько файлов. В этих случаях соглашение об именах также облегчает поиск файла, к которому принадлежит стиль.
Мне нравится использовать префикс, чтобы отличать правила Layout, State и Module. Для Layout я использую l-, но layout — будет работать так же хорошо. Использование префиксов, подобных grid, также обеспечивает достаточную ясность для разделения стилей макета из других стилей. Для правил состояний (state) мне нравится использовать префикс is- (например is-hidden или is-collapsed). Это помогает писать стили очень хорошо читаемыми.
Модули будут основной частью любого проекта. В результате, каждый модуль по аналогии мог бы начинаться с префикса наподобие .module-, но это было бы излишне подробным. Модули просто используют имя самого модуля.

Связанные элементы внутри модуля используют базовое имя в качестве префикса. Например, родитель имеет класс .exm, а во вложенных в него подписях используется .exm-caption. Я могу сразу посмотреть класс подписи и понять, что он связан с родителем .exm — это модуль, и сразу ясно где я могу найти стили для него.
Модули, являющиеся вариациями в другом модуле, также должны использовать имя базового модуля в качестве префикса. Подклассификация более подробно рассматривается в главе «Модули (Module)».
Это базовое соглашение об именах будет использоваться на всех страницах. Как и большинство других вещей, это рекомендация. Придерживаться её жестко не обязательно. Имейте соглашение, задокументируйте и придерживайтесь его.