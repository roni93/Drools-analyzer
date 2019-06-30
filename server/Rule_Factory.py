from Rule import Rule

def build_rules(rules_input):
    rules  = []
    for rule in rules_input:
        rules.append(build_rule(rule))
    return  rules


def build_rule(rule):
    rule_name = ""
    priority = ""
    when_flag = False
    temp_when = []
    when_clause = ""
    then_flag = False
    temp_then = []
    then_clause = ""
    comments = []
    comments_str = ""
    for line_rule in rule:
        line_rule = line_rule.replace('"','')
        if line_rule.startswith("##"):
            comments.append(line_rule)
            continue
        if "then" in line_rule:
            when_clause = ''.join(temp_when)

            then_flag = True
            when_flag = False
            continue
        if when_flag:
            temp_when.append(line_rule)

            continue
        if then_flag and not "end" == line_rule:
            temp_then.append(line_rule)
            continue
        if line_rule.startswith("rule ") or line_rule.startswith("##rule"):
            rule_name = line_rule
            continue
        if line_rule.startswith("priority "):
            priority = line_rule
            continue
        if "when" in line_rule:
            when_flag = True

            continue
        if "end" == line_rule:
            then_flag = False
            then_clause = "".join(temp_then)
            continue
    comments_str = "".join(comments)
    return Rule(rule_name,priority,when_clause,then_clause,comments_str)