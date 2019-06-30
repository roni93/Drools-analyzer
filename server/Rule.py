class Rule:


    def __init__(self,rule_name, priority, condition ,then, comments):
        self.rule_name = rule_name
        self.priority = priority
        self.condition = condition
        self.then = then
        self.comments  = comments