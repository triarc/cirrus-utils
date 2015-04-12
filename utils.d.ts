declare module Triarc {
    function hasValue(value: any): boolean;
    function hasNoValue(value: any): boolean;
    function isTrue(value?: boolean): boolean;
    function getOrdinals(anEnum: any): number[];
    function getEnumValue(anEnum: any, index: number): number;
    function getNames(anEnum: any): string[];
    function arrayHasValues(array: any): boolean;
    function strContains(str: string, value: string): boolean;
    function randomNumber(start: number, end: number): number;
    function strNotEmpty(str: string): boolean;
    function strIsEmpty(str: string): boolean;
    function validFloat(value: any, greaterThan?: number): boolean;
    function validNumber(value: number, greaterThan?: number): boolean;
    function getRandomChars(valueStr: string, numberOf: number): string;
    function dummy(): void;
}
declare module Triarc.Dom {
    function maintainHeightWithWindowSizeHandler(element: JQuery, eventType: string, percentage: number, resizeComponentFn: (totalHeight: number, percentageInPx: number) => void, offsetFactor?: number): number;
    function calculateHeightPercentageElement(element: JQuery, percentage: number, offsetFactor?: number): number;
    function maintainWidthWithWindowSizeHandler(element: JQuery, eventType: string, percentage: number, resizeComponentFn: (totalWidth: number, percentageInPx: number) => void, offsetFactor?: number): number;
    function calculateWidthPercentageElement(element: JQuery, percentage: number, offsetFactor?: number): number;
    function isCloseToTop(element: any, scrollingElement: any, withinPx: number): boolean;
    function isCloseToLeft(element: any, scrollingElement: any, withinPx: number): boolean;
    function isCloseToRight(element: any, scrollingElement: any, withinPx: number): boolean;
    function isCloseToBottom(element: any, scrollingElement: any, withinPx: number): boolean;
}
