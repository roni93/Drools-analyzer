def rules_from_files(lines):
    rules = []
    temp_rule = []
    new_rule = False
    for line in lines:

        line = line.replace('"','')
        if line.startswith("package") or line.startswith("import") or line.startswith("#global") or line.startswith(
                "global") or line == '' \
                or line.startswith("expander"):
            continue
        if new_rule:
            rules.append(temp_rule)
            temp_rule = []
            new_rule = False

        temp_rule.append(line)
        if line.startswith("end") or line.startswith("##end"):
            new_rule = True
    return rules