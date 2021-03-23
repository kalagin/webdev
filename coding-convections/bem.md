# Соглашение по БЭМ (Блок Элемент Модификатор)

## Правила именования классов

### Именование классов для **блоков**

- имя класса в стиле kebab.
- в имени класса используются буквы строчного регистра

Пример:

```css
/* блок profile */
.profile {
  width: 600px;
}

/* блок settings-navigation */
.settings-navigation {
  position: static;
}
```

### Именование классов для **элементов**

- при написании класса для элемента нужно учитывать что его имя начинается с имени блока
- имя элемента отделяется нижним подчеркиванием (`_`)
- в имени класса используются буквы строчного регистра

Пример:

```css
/* блок profile */
.profile {
  width: 600px;
}

/* элемент avatar, относящийся к блоку profile */
.profile_avatar {
  width: 600px;
}

/* блок settings-navigation */
.settings-navigation {
  position: static;
}

/* элемент menu, относящийся к блоку settings-navigation */
.settings-navigation_menu {
  display: flex;
}

/* блок header-menu */
.header-menu {
  display: flex;
  flex-direction: column;
}

/* элемент menu-item, относящийся к блоку header-menu */
.header-menu_item {
  min-width: 100px;
}
```

### Именование классов для **модификаторов**

- при написании класса для модификатора нужно учитывать что его имя должно содержать имя блока в случае если это модификатор блока или имя блока + имя элемента, если это модификатор элемента
- имя модификатора отделяется двойным тире (`--`)
- в имени класса используются буквы строчного регистра

Пример:

```css
/* блок header-menu */
.header-menu {
  display: flex;
  flex-direction: column;
}

/* модификатор disabled для блока header-menu */
.header-menu--disabled {
  display: flex;
  flex-direction: column;
}

/* элемент menu-item, относящийся к блоку header-menu */
.header-menu_item {
  min-width: 100px;
}

/* модификатор active для элемента item блока header-menu */
.header-menu_item--active {
  border-bottom: 1px solid red;
}
```

## Полезные ссылки:

- [Основные определения БЭМ](https://ru.bem.info/methodology/key-concepts/#%D0%91%D0%AD%D0%9C-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE)
