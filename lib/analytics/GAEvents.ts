enum GAEventCategories {
    NAVIGATION = 'Navigation',
    WIDGET = 'Widget',
}

export const NavigationEvents = {
    TRADE_ON_COWSWAP: { category: GAEventCategories.NAVIGATION, action: 'Trade On CoW Swap' }
}

export const WidgetEvents = {
    CONFIGURE_WIDGET: { category: GAEventCategories.WIDGET, action: 'Configure Widget' },
    READ_DOCS: { category: GAEventCategories.WIDGET, action: 'Read Docs' },
    TALK_TO_US: { category: GAEventCategories.WIDGET, action: 'Talk To Us' },
}
