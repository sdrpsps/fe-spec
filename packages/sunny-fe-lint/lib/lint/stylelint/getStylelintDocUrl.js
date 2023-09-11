"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStylelintRuleDocUrl = void 0;
function getStylelintRuleDocUrl(rule) {
    var match = rule.match(/^@scss\/(\S+)$/);
    if (match) {
        return "https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/".concat(match[1]);
    }
    if (rule !== 'CssSyntaxError')
        return "https://stylelint.io/user-guide/rules/list/".concat(rule);
    return '';
}
exports.getStylelintRuleDocUrl = getStylelintRuleDocUrl;
