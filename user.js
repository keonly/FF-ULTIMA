/*///////////////////////////////////////////////////////////////////////////////////////\

┏┓┏┓  ┳┳┓ ┏┳┓┳┳┳┓┏┓
┣ ┣   ┃┃┃  ┃ ┃┃┃┃┣┫
┻ ┻   ┗┛┗┛ ┻ ┻┛ ┗┛┗
                   
FF Ultima:         https://github.com/soulhotel/FF-ULTIMA
Wiki:              https://github.com/soulhotel/FF-ULTIMA/wiki
Latest Version:    https://github.com/soulhotel/FF-ULTIMA/releases/latest                 
License:           MPL 2.0 https://github.com/soulhotel/FF-ULTIMA/blob/main/LICENSE

\////////////////////////////////////////////////////////////////////////////////////////*/

/*color schemes*/
user_pref("user.theme.dark.a", true); /*default dark mode*/
user_pref("user.theme.light.a", true); /*default light mode*/
user_pref("user.theme.adaptive", false); /*Auto Tab Color Extension*/
user_pref("user.theme.dark.catppuccin", false);
user_pref("user.theme.dark.catppuccin-frappe", false);
user_pref("user.theme.dark.catppuccin-mocha", false); /*by Draff*/
user_pref("user.theme.dark.gruvbox", false);
user_pref("user.theme.light.gruvbox", false);
user_pref("user.theme.dark.midnight", false);

/*titlebar, tabbar*/
user_pref("ultima.disable.alltabs.button", true);
user_pref("ultima.disable.windowcontrols.button", false);
user_pref("ultima.disable.verticaltab.bar", true);
user_pref("ultima.disable.verticaltab.bar.withindicator", true);
user_pref("ultima.xstyle.bookmarks.autohide", true);
user_pref("ultima.spacing.compact.tabs", false);
user_pref("ultima.tabs.belowURLbar", true);
user_pref("browser.tabs.tabMinWidth", 0);
user_pref("sidebar.animation.expand-on-hover.duration-ms", 120);
user_pref("sidebar.expandOnHover", true); 

/*sidebar*/
user_pref("ultima.sidebar.autohide", false);
user_pref("ultima.sidebery.autohide", true);
user_pref("ultima.sidebery.expandon.inactive.windows", false);
user_pref("ultima.xstyle.sidebar.theming", true);

/*url bar*/
user_pref("ultima.navbar.autohide", false);
user_pref("ultima.urlbar.suggestions", true);
user_pref("ultima.urlbar.centered", false);
user_pref("ultima.urlbar.hidebuttons", false);
user_pref("ultima.xstyle.urlbar", false);

/*extra theming*/
user_pref("ultima.theme.extensions", true);
user_pref("ultima.theme.icons", true);
user_pref("ultima.theme.menubar", true);
user_pref("ultima.theme.color.swap", false);

/*alternate styles*/
user_pref("ultima.spacing.compact", false);
user_pref("ultima.xstyle.tabgroups.i", true);
user_pref("ultima.xstyle.tabgroups.ii", false);
user_pref("ultima.xstyle.tabgroups.with.colormix", false);
user_pref("ultima.xstyle.containertabs.i", false);
user_pref("ultima.xstyle.containertabs.ii", false);
user_pref("ultima.xstyle.containertabs.iii", true);
user_pref("ultima.xstyle.pinnedtabs.i", false);
user_pref("ultima.xstyle.newtabbutton.ontop.i", false);
user_pref("ultima.xstyle.newtabbutton.ontop.ii", false);
user_pref("ultima.xstyle.newtab.rounded", false);
user_pref("ultima.xstyle.private", false);
user_pref("ultima.xstyle.bookmarks.fading", false);
user_pref("ultima.xstyle.newtab.rounded", false);

/*override wallpapers*/
user_pref("user.theme.wallpaper.catppuccin", false);
user_pref("user.theme.wallpaper.catppuccin-mocha", false);
user_pref("user.theme.wallpaper.catppuccin-frappe", false);
user_pref("user.theme.wallpaper.dusky", false);
user_pref("user.theme.wallpaper.fullmoon", false);
user_pref("user.theme.wallpaper.green", false);
user_pref("user.theme.wallpaper.gruvbox", false);
user_pref("user.theme.wallpaper.gruvbox.flowers", false);
user_pref("user.theme.wallpaper.gruvbox.light", false);
user_pref("user.theme.wallpaper.midnight", false);
user_pref("user.theme.wallpaper.midnight2", false);
user_pref("user.theme.wallpaper.seasonal", false);
user_pref("user.theme.wallpaper.seasonal2", false);

/*new tab page*/
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", false);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.customWallpaper.enabled", true);
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

/*extra configs*/
user_pref("ultima.enable.nightly.config", false);
user_pref("ultima.enable.js.config", false);

/*extra necessary*/
user_pref("ultima.xstyle.highlight.aboutconfig", true);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.prompt-connection", false);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.has-selector.enabled", true);
user_pref("widget.gtk.ignore-bogus-leave-notify", 1);
user_pref("widget.gtk.rounded-bottom-corners.enabled", true);
user_pref("widget.gtk.native-context-menus", false);
user_pref("sidebar.revamp", true);
user_pref("sidebar.verticalTabs", true);

/*extra recommended*/
user_pref("toolkit.tabbox.switchByScrolling", false);
user_pref("browser.tabs.groups.enabled", true);
user_pref("browser.tabs.hoverPreview.enabled", true);
user_pref("media.videocontrols.picture-in-picture.enable-when-switching-tabs.enabled", false);

/*extra accessibility*/
user_pref("findbar.highlightAll", true);
user_pref("browser.tabs.insertAfterCurrent", true);
user_pref("browser.search.context.loadInBackground", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("network.http.max-connections", 300);
user_pref("browser.urlbar.suggest.calculator", false);
user_pref("apz.overscroll.enabled", true);
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", true);

/*extra privacy*/
user_pref("browser.send_pings", false); 
user_pref("extensions.pocket.enabled", false);
