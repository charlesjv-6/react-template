/* eslint-disable no-extend-native */
String.prototype.trimWithEllipsis = function(maxLength) {
    if (this.length > maxLength) {
        return this.substring(0, maxLength) + '...';
    }
    return this;
};