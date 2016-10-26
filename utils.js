var Triarc;
(function (Triarc) {
    Triarc.generateGuid = (typeof (crypto) != 'undefined' &&
        typeof (crypto.getRandomValues) != 'undefined') ?
        function () {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            crypto.getRandomValues(buf);
            var S4 = function (num) {
                var ret = num.toString(16);
                while (ret.length < 4) {
                    ret = "0" + ret;
                }
                return ret;
            };
            return (S4(buf[0]) + S4(buf[1]) + "-" + S4(buf[2]) + "-" + S4(buf[3]) + "-" + S4(buf[4]) + "-" + S4(buf[5]) + S4(buf[6]) + S4(buf[7]));
        }
        :
            function () { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            }); };
    function hasValue(value) {
        return value !== undefined && value !== null;
    }
    Triarc.hasValue = hasValue;
    function hasNoValue(value) {
        return !Triarc.hasValue(value);
    }
    Triarc.hasNoValue = hasNoValue;
    function isTrue(value) {
        if (Triarc.hasNoValue(value))
            return false;
        return value;
    }
    Triarc.isTrue = isTrue;
    function getOrdinals(anEnum) {
        return Enum.getOrdinals(anEnum);
    }
    Triarc.getOrdinals = getOrdinals;
    function getEnumValue(anEnum, index) {
        return Enum.getEnumValue(anEnum, index);
    }
    Triarc.getEnumValue = getEnumValue;
    function getNames(anEnum) {
        return Enum.getNames(anEnum);
    }
    Triarc.getNames = getNames;
    var Enum;
    (function (Enum) {
        function getNames(anEnum) {
            var enumNames = [];
            Enum.forEach(anEnum, function (val, name) {
                enumNames.push(name);
            });
            return enumNames;
        }
        Enum.getNames = getNames;
        function getEnumValue(anEnum, index) {
            var ordinals = getOrdinals(anEnum);
            return ordinals[index];
        }
        Enum.getEnumValue = getEnumValue;
        function getOrdinals(anEnum) {
            var enumValues = [];
            Enum.forEach(anEnum, function (val, name) {
                enumValues.push(val);
            });
            return enumValues;
        }
        Enum.getOrdinals = getOrdinals;
        function forEach(anEnum, callback) {
            for (var val in anEnum) {
                var name = anEnum[val];
                if (typeof (name) === "string") {
                    callback(anEnum[name], name);
                }
            }
        }
        Enum.forEach = forEach;
        function containsFlag(flag, enumValue) {
            return (flag & enumValue) === flag;
        }
        Enum.containsFlag = containsFlag;
        function addFlag(flag, enumValue) {
            return flag | enumValue;
        }
        Enum.addFlag = addFlag;
        function removeFlag(flag, enumValue) {
            return (flag ^ enumValue) & enumValue;
        }
        Enum.removeFlag = removeFlag;
    })(Enum = Triarc.Enum || (Triarc.Enum = {}));
    function arrayHasValues(array) {
        return angular.isArray(array) && array.length > 0;
    }
    Triarc.arrayHasValues = arrayHasValues;
    //export function contains(array: any[], value: any): boolean {
    //    for (var i = 0; i < array.length; i++) {
    //        if (array[i] === value) {
    //            return true;
    //        }
    //    }
    //    return false;
    //}
    function strContains(str, value) {
        return angular.isString(str) && str.indexOf(value) !== -1;
    }
    Triarc.strContains = strContains;
    function randomNumber(start, end) {
        return Math.floor(Math.random() * end) + start;
    }
    Triarc.randomNumber = randomNumber;
    function strNotEmpty(str) {
        return angular.isString(str) && str.length > 0;
    }
    Triarc.strNotEmpty = strNotEmpty;
    function strIsEmpty(str) {
        return angular.isString(str) && str.length === 0;
    }
    Triarc.strIsEmpty = strIsEmpty;
    var FLOAT_REGEXP = /^(\-|\+)?\d+((\.|\,)\d+)?$/;
    function validFloat(value, greaterThan) {
        return FLOAT_REGEXP.test(value) && (Triarc.hasValue(greaterThan) ? value > 0 : true);
    }
    Triarc.validFloat = validFloat;
    function validNumber(value, greaterThan) {
        return angular.isNumber(value) && (Triarc.hasValue(greaterThan) ? value > 0 : true);
    }
    Triarc.validNumber = validNumber;
    function getRandomChars(valueStr, numberOf) {
        var returnValue = "";
        // cycle through n number of times and get random bytes from the contents of the file
        for (var i = 0; i < numberOf; i++) {
            var randomPosition = Triarc.randomNumber(0, valueStr.length);
            returnValue += valueStr.charAt(randomPosition);
        }
        return returnValue;
    }
    Triarc.getRandomChars = getRandomChars;
})(Triarc || (Triarc = {}));
var Triarc;
(function (Triarc) {
    var Dom;
    (function (Dom) {
        function maintainHeightWithWindowSizeHandler(element, eventType, percentage, resizeComponentFn, offsetFactor) {
            element[0].addEventListener(eventType, function () {
                resizeComponentFn($(element).height(), calculateHeightPercentageElement(element, percentage, offsetFactor));
            }, true);
            return calculateHeightPercentageElement(element, percentage, offsetFactor);
        }
        Dom.maintainHeightWithWindowSizeHandler = maintainHeightWithWindowSizeHandler;
        function calculateHeightPercentageElement(element, percentage, offsetFactor) {
            var elementHeight = Triarc.hasValue(offsetFactor) ? $(element).height() - offsetFactor : $(element).height();
            return (percentage / 100) * elementHeight;
        }
        Dom.calculateHeightPercentageElement = calculateHeightPercentageElement;
        function maintainWidthWithWindowSizeHandler(element, eventType, percentage, resizeComponentFn, offsetFactor) {
            element[0].addEventListener(eventType, function () {
                resizeComponentFn($(element).width(), calculateWidthPercentageElement(element, percentage, offsetFactor));
            }, true);
            return calculateWidthPercentageElement(element, percentage, offsetFactor);
        }
        Dom.maintainWidthWithWindowSizeHandler = maintainWidthWithWindowSizeHandler;
        function calculateWidthPercentageElement(element, percentage, offsetFactor) {
            var elementWidth = Triarc.hasValue(offsetFactor) ? $(element).width() - offsetFactor : $(element).width();
            return (percentage / 100) * elementWidth;
        }
        Dom.calculateWidthPercentageElement = calculateWidthPercentageElement;
        function isCloseToTop(element, scrollingElement, withinPx) {
            var top = $(element).offset().top;
            return top >= 0 && (top <= (withinPx));
        }
        Dom.isCloseToTop = isCloseToTop;
        function isCloseToLeft(element, scrollingElement, withinPx) {
            var left = $(element).offset().left - $(scrollingElement).offset().left;
            return (left >= 0) && (left <= (withinPx));
        }
        Dom.isCloseToLeft = isCloseToLeft;
        function isCloseToRight(element, scrollingElement, withinPx) {
            var width = scrollingElement.width() - scrollingElement.scrollLeft();
            var bounds = element.getBoundingClientRect();
            return (width + withinPx) < bounds.right;
        }
        Dom.isCloseToRight = isCloseToRight;
        function isCloseToBottom(element, scrollingElement, withinPx) {
            var jqScrollingElem = $(scrollingElement);
            var height = jqScrollingElem.height();
            var top = $(element).offset().top - jqScrollingElem.offset().top;
            return (height > top) && (top >= (height - withinPx));
        }
        Dom.isCloseToBottom = isCloseToBottom;
    })(Dom = Triarc.Dom || (Triarc.Dom = {}));
})(Triarc || (Triarc = {}));

