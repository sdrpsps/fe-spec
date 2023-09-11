"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatESLintResults = void 0;
function formatESLintResults(results, quiet, eslint) {
    var rulesMeta = eslint.getRulesMetaForResults(results);
    return results
        .filter(function (_a) {
        var warningCount = _a.warningCount, errorCount = _a.errorCount;
        return errorCount || warningCount;
    })
        .map(function (_a) {
        var filePath = _a.filePath, messages = _a.messages, errorCount = _a.errorCount, warningCount = _a.warningCount, fixableErrorCount = _a.fixableErrorCount, fixableWarningCount = _a.fixableWarningCount;
        return ({
            filePath: filePath,
            messages: messages
                .map(function (_a) {
                var _b, _c;
                var _d = _a.line, line = _d === void 0 ? 0 : _d, _e = _a.column, column = _e === void 0 ? 0 : _e, ruleId = _a.ruleId, message = _a.message, fatal = _a.fatal, severity = _a.severity;
                return ({
                    line: line,
                    column: column,
                    rule: ruleId,
                    url: ((_c = (_b = rulesMeta[ruleId]) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.url) || '',
                    message: message.replace(/([^])\.$/u, '$1'),
                    errored: fatal || severity === 2,
                });
            })
                .filter(function (_a) {
                var errored = _a.errored;
                return (quiet ? errored : true);
            }),
            errorCount: errorCount,
            warningCount: quiet ? 0 : warningCount,
            fixableErrorCount: fixableErrorCount,
            fixableWarningCount: quiet ? 0 : fixableWarningCount,
        });
    });
}
exports.formatESLintResults = formatESLintResults;
