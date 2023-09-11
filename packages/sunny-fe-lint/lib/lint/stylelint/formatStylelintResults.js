"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatStylelintResults = void 0;
var getStylelintDocUrl_1 = require("./getStylelintDocUrl");
function formatStylelintResults(results, quiet) {
    return results.map(function (_a) {
        var source = _a.source, warnings = _a.warnings;
        var errorCount = 0;
        var warningCount = 0;
        var messages = warnings
            .filter(function (item) { return !quiet || item.severity === 'error'; })
            .map(function (item) {
            var _a = item.line, line = _a === void 0 ? 0 : _a, _b = item.column, column = _b === void 0 ? 0 : _b, rule = item.rule, severity = item.severity, text = item.text;
            if (severity === 'error') {
                errorCount++;
            }
            else {
                warningCount++;
            }
            return {
                line: line,
                column: column,
                rule: rule,
                url: (0, getStylelintDocUrl_1.getStylelintRuleDocUrl)(rule),
                message: text.replace(/([^ ])\.$/u, '$1').replace(new RegExp("\\(".concat(rule, "\\)")), ''),
                errored: severity === 'error',
            };
        });
        return {
            filePath: source,
            messages: messages,
            errorCount: errorCount,
            warningCount: warningCount,
            fixableErrorCount: 0,
            fixableWarningCount: 0,
        };
    });
}
exports.formatStylelintResults = formatStylelintResults;
