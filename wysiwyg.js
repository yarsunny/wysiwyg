wysiwygPage = {
    Dom: {
        displayButton: function () {
            return document.getElementById("my-button");
        },
        displayButtonText: function () {
            return document.getElementsByTagName("btntxt")[0];
        },
        dragButton: function () {
            return document.getElementById("drag-anchor");
        },
        styleElement: function () {
            return document.getElementsByTagName('style')[0];
        },
        saveCSS: function () {
            return document.getElementById('save-css');
        },
        code: function () {
            return document.getElementById('css-code');
        },
        buttonProperties: {
            btnWidth: function () {
                return document.getElementById("btn-width");
            },
            btnHeight: function () {
                return document.getElementById("btn-height");
            },
            btnText: function () {
                return document.getElementById("btn-txt");
            },
            btnFontFamily: function () {
                return document.getElementById("btn-fnt-fmly");
            },
            btnFontSize: function () {
                return document.getElementById("btn-fnt-size");
            },
            btnFontWeight: function () {
                return document.getElementById("btn-fnt-wt");
            },
            btnTextColor: function () {
                return document.getElementById("btn-txt-clr");
            },
            btnBckBtmColor: function () {
                return document.getElementById("btn-bck-btm-clr")
            },
            btnBckTopColor: function () {
                return document.getElementById("btn-bck-top-clr")
            },
            btnPdngTop: function () {
                return document.getElementById("btn-padding-top");
            },
            btnPdngRight: function () {
                return document.getElementById("btn-padding-right");
            },
            btnPdngBottom: function () {
                return document.getElementById("btn-padding-bottom");
            },
            btnPdngLeft: function () {
                return document.getElementById("btn-padding-left");
            },
            btnPadding: function () {
                return document.getElementsByClassName("btn-padding");
            },
            btnBorder: function () {
                return document.getElementById("btn-border");
            },
            btnBorderRadius: function () {
                return document.getElementById("btn-border-radius");
            },
            btnBorderTop: function () {
                return document.getElementById("btn-border-top");
            },
            btnBorderRight: function () {
                return document.getElementById("btn-border-right");
            },
            btnBorderBottom: function () {
                return document.getElementById("btn-border-bottom");
            },
            btnBorderLeft: function () {
                return document.getElementById("btn-border-left");
            },
            btnHoverBackground: function () {
                return document.getElementById("btn-hover-color");
            },
            btnHoverTextColor: function () {
                return document.getElementById("btn-hover-txt-color");
            },
            btnActiveBackground: function () {
                return document.getElementById("btn-active-color");
            },
            btnActiveTextColor: function () {
                return document.getElementById("btn-active-txt-color");
            }
        }
    },
    Ajax: {

    },
    EventHandlers: {
        all: function () {
            this.anchor.bind();
            this.onWidthChange();
            this.onHeightChange();
            this.onTextChange();
            this.onFontFamilyChange();
            this.onFontSizeChange();
            this.onFontWeightChange();
            this.onTextColorChange();
            this.onBckBtmColorChange();
            this.onBckTopColorChange();
            this.onPaddingChange();
            this.onBorderChange();
            this.onBorderRadiusChange();
            this.onBorderColorChange();
            this.onHoverBackgroundChange();
            this.onHoverTextColorChange();
            this.onActiveBackgroundChange();
            this.onActiveTextColorChange();
            this.onSaveCSS();
        },
        anchor: {
            bind: function () {
                dom.dragButton().addEventListener('mousedown', functions.anchor.initDrag, false);
            }
        },
        onWidthChange: function () {
            dom.buttonProperties.btnWidth().addEventListener('keyup', function () {
                var width = parseInt(this.value);
                if (functions.utilities.validate('width', width)) {
                    globals.btnCSS.width = width;
                    functions.displayButton.changeUI();
                }
            }, false);
        },
        onHeightChange: function () {
            dom.buttonProperties.btnHeight().addEventListener('keyup', function () {
                var height = parseInt(this.value);
                if (functions.utilities.validate('height', height)) {
                    globals.btnCSS.height = height;
                    functions.displayButton.changeUI();
                }
            }, false);
        },
        onTextChange: function () {
            dom.buttonProperties.btnText().addEventListener('keyup', function () {
                globals.btnCSS['text'] = this.value;
                functions.displayButton.changeUI();
            }, false);
        },
        onFontFamilyChange: function () {
            dom.buttonProperties.btnFontFamily().addEventListener('change', function () {
                globals.btnCSS['fontFamily'] = this.value;
                functions.displayButton.changeUI();
            });
        },
        onFontSizeChange: function () {
            dom.buttonProperties.btnFontSize().addEventListener('keyup', function () {
                var fontsize = parseInt(this.value);
                if (functions.utilities.validate('fontsize', fontsize)) {
                    globals.btnCSS['fontSize'] = this.value;
                    functions.displayButton.changeUI();
                }
            }, false);
        },
        onFontWeightChange: function () {
            dom.buttonProperties.btnFontWeight().addEventListener('change', function () {
                globals.btnCSS['fontWeight'] = this.value;
                functions.displayButton.changeUI();
            });
        },
        onTextColorChange: function () {
            dom.buttonProperties.btnTextColor().addEventListener('input', function () {
                globals.btnCSS['color'] = this.value;
                functions.displayButton.changeUI();
            }, false);
        },
        onBckBtmColorChange: function () {
            dom.buttonProperties.btnBckBtmColor().addEventListener('input', function () {
                globals.btnCSS['backgroundBottom'] = this.value;
                functions.displayButton.changeUI();
            }, false);
        },
        onBckTopColorChange: function () {
            dom.buttonProperties.btnBckTopColor().addEventListener('input', function () {
                globals.btnCSS['backgroundTop'] = this.value;
                functions.displayButton.changeUI();
            }, false);
        },
        onPaddingChange: function () {
            functions.utilities.addEventListenerByClass('btn-padding', 'keyup', function () {
                var padding = parseInt(this.value);
                if (functions.utilities.validate('padding', padding)) {
                    switch (this.id) {
                        case "btn-padding-top":
                            globals.btnCSS['paddingTop'] = padding;
                            break;
                        case "btn-padding-right":
                            globals.btnCSS['paddingRight'] = padding;
                            break;
                        case "btn-padding-bottom":
                            globals.btnCSS['paddingBottom'] = padding;
                            break;
                        case "btn-padding-left":
                            globals.btnCSS['paddingLeft'] = padding;
                            break;
                        default:
                            break;
                    }
                    functions.displayButton.changeUI();
                }
            });
        },
        onBorderChange: function () {
            dom.buttonProperties.btnBorder().addEventListener('keyup', function () {
                var border = parseInt(this.value);
                if (functions.utilities.validate('border', border)) {
                    globals.btnCSS['border'] = parseInt(this.value);
                    functions.displayButton.changeUI();
                }

            }, false);
        },
        onBorderRadiusChange: function () {
            dom.buttonProperties.btnBorderRadius().addEventListener('keyup', function () {
                var borderradius = parseInt(this.value);
                if (functions.utilities.validate('borderradius', borderradius)) {
                    globals.btnCSS['borderRadius'] = parseInt(this.value);
                    functions.displayButton.changeUI();
                }

            }, false);
        },
        onBorderColorChange: function () {
            functions.utilities.addEventListenerByClass('btn-border-clr', 'input', function () {
                switch (this.id) {
                    case "btn-border-top":
                        globals.btnCSS['borderTop'] = this.value;
                        break;
                    case "btn-border-right":
                        globals.btnCSS['borderRight'] = this.value;
                        break;
                    case "btn-border-bottom":
                        globals.btnCSS['borderBottom'] = this.value;
                        break;
                    case "btn-border-left":
                        globals.btnCSS['borderLeft'] = this.value;
                        break;
                    default:
                        break;
                }
                functions.displayButton.changeUI();
            });
        },
        onHoverBackgroundChange: function () {
            dom.buttonProperties.btnHoverBackground().addEventListener('input', function () {
                globals.btnCSS['hoverBackground'] = this.value;
                functions.displayButton.changeUI();
            }, false);
        },
        onHoverTextColorChange: function () {
            dom.buttonProperties.btnHoverTextColor().addEventListener('input', function () {
                globals.btnCSS['hoverColor'] = this.value;
                functions.displayButton.changeUI();
            }, false);
        },
        onActiveBackgroundChange: function () {
            dom.buttonProperties.btnActiveBackground().addEventListener('input', function () {
                globals.btnCSS['activeBackground'] = this.value;
                functions.displayButton.changeUI();
            }, false);
        },
        onActiveTextColorChange: function () {
            dom.buttonProperties.btnActiveTextColor().addEventListener('input', function () {
                globals.btnCSS['activeColor'] = this.value;
                functions.displayButton.changeUI();
            }, false);
        },
        onSaveCSS: function () {
            dom.saveCSS().addEventListener('click', function () {
                var o = globals.btnCSS, historyData = [];
                if (functions.utilities.checkCookie('cookieCache')) {
                    historyData = JSON.parse(functions.utilities.getCookie('cookieCache'))["historyData"];
                    globals.btnCount = historyData.length;
                }
                o.id = globals.btnCount;
                historyData.push(o);
                functions.utilities.setCookie('cookieCache', JSON.stringify({
                    'historyData': historyData
                }), 1);
                functions.utilities.addButton(o);
                if (!functions.utilities.checkCookie('cookieCache')) {
                    globals.btnCount += 1;

                }
            });
        }
    },
    Functions: {
        loadDefaults: function () {
            var d = globals.btnCSS, btnprop = dom.buttonProperties;
            functions.displayButton.changeUI(globals.btnCSS, true);
            btnprop.btnHeight().value = d.height;
            btnprop.btnWidth().value = d.width;
            btnprop.btnText().value = d.text;
            btnprop.btnFontFamily().value = d.fontFamily;
            btnprop.btnFontSize().value = d.fontSize;
            btnprop.btnFontWeight().value = d.fontWeight;
            btnprop.btnTextColor().value = d.color;
            btnprop.btnBckBtmColor().value = d.backgroundBottom;
            btnprop.btnBckTopColor().value = d.backgroundTop;
            btnprop.btnPdngTop().value = d.paddingTop;
            btnprop.btnPdngRight().value = d.paddingRight;
            btnprop.btnPdngBottom().value = d.paddingBottom;
            btnprop.btnPdngLeft().value = d.paddingLeft;
            btnprop.btnBorder().value = d.border;
            btnprop.btnBorderRadius().value = d.borderRadius;
            btnprop.btnBorderTop().value = d.borderTop;
            btnprop.btnBorderRight().value = d.borderRight;
            btnprop.btnBorderBottom().value = d.borderBottom;
            btnprop.btnBorderLeft().value = d.borderLeft;
            btnprop.btnHoverBackground().value = d.hoverBackground;
            btnprop.btnHoverTextColor().value = d.hoverColor;
            btnprop.btnActiveBackground().value = d.activeBackground;
            btnprop.btnActiveTextColor().value = d.activeColor;
        },
        loadCookieData: function () {
            var historyData = [];
            if (functions.utilities.checkCookie('cookieCache')) {
                var buttons = JSON.parse(functions.utilities.getCookie('cookieCache'))["historyData"];
                globals.btnCount = buttons.length;
                for (var i = 0; i < globals.btnCount; i++) {
                    functions.utilities.addButton(buttons[i]);
                }
            }

        },
        utilities: {
            addButton: function (curBtn) {
                var css = functions.displayButton.generateCSS(curBtn, false);
                var btn = document.createElement("BUTTON");
                btn.setAttribute("code", css);
                btn.className = "savedButton";
                btn.id = "my-button" + curBtn["id"];
                btn.addEventListener('click', function () {
                    var css = this.getAttribute("code");
                    document.getElementById("modal").click();
                    document.getElementById("dialogCssCode").innerHTML = css;
                }, false);
                var txt = document.createTextNode(curBtn['text']);
                btn.appendChild(txt);
                document.getElementById('div-history').appendChild(btn);
                var sty = document.createElement("style");
                sty.className = "my-button" + curBtn["id"];
                sty.type = "text/css";
                sty.innerHTML = css;
                document.getElementsByTagName("head")[0].appendChild(sty);
            },
            addEventListenerByClass: function (className, event, fn) {
                var list = document.getElementsByClassName(className);
                for (var i = 0, len = list.length; i < len; i++) {
                    list[i].addEventListener(event, fn, false);
                }
            },
            validate: function (param, pvalue) {
                switch (param) {
                    case 'width':
                    case 'height':
                    case 'borderradius':
                        return (pvalue <= globals.maxHeightWidthRadius && pvalue >= globals.minValue);
                        break;
                    case 'fontsize':
                    case 'padding':
                        return (pvalue <= globals.maxFontPadding && pvalue >= globals.minValue);
                        break;
                    case 'border':
                        return (pvalue <= globals.maxBorder && pvalue >= globals.minValue)
                        break;
                    default:
                        return false;
                        break;
                }

            },
            setCookie: function (cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
            },
            getCookie: function (cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1);
                    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                }
                return "";
            },
            checkCookie: function (cname) {
                return (functions.utilities.getCookie(cname) != "") ? true : false;
            }
        },
        anchor: {
            initDrag: function (e) {
                globals.startX = e.clientX;
                globals.statrY = e.clientY;
                globals.startWidth = parseInt(getComputedStyle(dom.displayButton()).width);
                globals.startHeighth = parseInt(getComputedStyle(dom.displayButton()).height);
                document.documentElement.addEventListener('mousemove', functions.anchor.doDrag, false);
                document.documentElement.addEventListener('mouseup', functions.anchor.stopDrag, false);
            },
            doDrag: function (e) {
                var tWidth = (globals.startWidth + e.clientX - globals.startX);
                var tHeight = (globals.startHeight + e.clientY - globals.startY);

                if (tWidth <= globals.maxHeightWidthRadius && tHeight <= globals.maxHeightWidthRadius) {
                    globals.btnCSS['height'] = tHeight;
                    globals.btnCSS['width'] = tWidth;
                }
                functions.displayButton.changeUI(globals.btnCSS, true);
                dom.buttonProperties.btnWidth().value = globals.btnCSS['width'];
                dom.buttonProperties.btnHeight().value = globals.btnCSS['height'];
            },
            stopDrag: function (event) {
                document.documentElement.removeEventListener('mousemove', functions.anchor.doDrag, false);
                document.documentElement.removeEventListener('mouseup', functions.anchor.stopDrag, false);
            }
        },
        displayButton: {
            generateCSS: function (CSS, dButton) {
                var cssStyleString;
                cssStyleString = dButton ? "#my-button { " : "#my-button" + CSS['id'] + " { ";
                cssStyleString += " width: " + CSS["width"] + "px ; ";
                cssStyleString += " height: " + CSS["height"] + "px ; ";
                cssStyleString += " background-color: " + CSS["backgroundColor"] + "; ";
                cssStyleString += " font-family: " + CSS["fontFamily"] + "; ";
                cssStyleString += " font-size: " + CSS["fontSize"] + "px ; ";
                cssStyleString += " font-weight: " + CSS["fontWeight"] + "; ";
                cssStyleString += " color: " + CSS["color"] + "; ";
                cssStyleString += " background: -webkit-gradient(linear, left top, left bottom, from(" + CSS['backgroundTop'] + "), to(" + CSS['backgroundBottom'] + ")); ";
                cssStyleString += " background: -moz-linear-gradient(top, " + CSS['backgroundTop'] + ", " + CSS['backgroundBottom'] + "); ";
                cssStyleString += "  padding: " + CSS['paddingTop'] + "px " + CSS['paddingRight'] + "px " + CSS['paddingBottom'] + "px " + CSS['paddingLeft'] + "px ; ";
                cssStyleString += " border-top: " + CSS["border"] + "px solid " + CSS["borderTop"] + " ; ";
                cssStyleString += " border-right: " + CSS["border"] + "px solid " + CSS["borderRight"] + " ; ";
                cssStyleString += " border-bottom: " + CSS["border"] + "px solid " + CSS["borderBottom"] + " ; ";
                cssStyleString += " border-left: " + CSS["border"] + "px solid " + CSS["borderLeft"] + " ; ";
                cssStyleString += " -webkit-border-radius: " + CSS['borderRadius'] + "px ;";
                cssStyleString += " -moz-border-radius: " + CSS['borderRadius'] + "px ;";
                cssStyleString += " border-radius: " + CSS['borderRadius'] + "px ;";
                cssStyleString += " } ";
                cssStyleString += dButton ? "#my-button:hover { " : " #my-button" + CSS['id'] + ":hover { ";
                cssStyleString += " background: " + CSS["hoverBackground"] + " ; ";
                cssStyleString += " color: " + CSS["hoverColor"] + " ; ";
                cssStyleString += " border: 1px solid " + CSS["hoverBackground"] + " ; ";
                cssStyleString += " } ";
                cssStyleString += dButton ? "#my-button:active { " : " #my-button" + CSS['id'] + ":active { ";
                cssStyleString += " background: " + CSS["activeBackground"] + " ; ";
                cssStyleString += " color: " + CSS["activeColor"] + " ; ";
                cssStyleString += " border: 1px solid " + CSS["activeBackground"] + " ; ";
                cssStyleString += " } ";
                return cssStyleString;
            },
            changeUI: function () {
                var css = functions.displayButton.generateCSS(globals.btnCSS, true);
                dom.styleElement().innerHTML = css;
                dom.displayButtonText().innerHTML = globals.btnCSS["text"];
                //change code
                dom.code().innerHTML = css;

            }
        },
        changeWidthAndHeightTextValues: function () {

        }
    },
    Globals: {
        btnCount: 0,
        startX: 0,
        startY: 0,
        startWidth: 0,
        startHeight: 0,
        minValue: 0,
        maxHeightWidthRadius: 500,
        maxFontPadding: 100,
        maxBorder: 10,
        btnCSS: {
            "id": 0,
            "width": 300,
            "height": 100,
            "backgroundColor": "#cccccc",
            "fontFamily": "Arial",
            "fontSize": 20,
            "fontWeight": "normal",
            "text": "button",
            "color": "#ffffff",
            "backgroundBottom": "#007EE8",
            "backgroundTop": "#007FDA",
            "paddingTop": 4,
            "paddingRight": 4,
            "paddingBottom": 4,
            "paddingLeft": 4,
            "border": 2,
            "borderTop": "#ffffff",
            "borderRight": "#ffffff",
            "borderBottom": "#ffffff",
            "borderLeft": "#ffffff",
            "borderRadius": "10",
            "hoverColor": "#ffffff",
            "hoverBackground": "#565478",
            "activeColor": "#ffffff",
            "activeBackground": "#678765"
        }
    }
}
dom = wysiwygPage.Dom;
ajax = wysiwygPage.Ajax;
eventHandlers = wysiwygPage.EventHandlers;
functions = wysiwygPage.Functions;
globals = wysiwygPage.Globals;

(function () {
    eventHandlers.all();
    wysiwygPage.Functions.loadDefaults();
    wysiwygPage.Functions.loadCookieData();
})();
