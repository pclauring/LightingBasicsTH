({
    clickCreateItem : function (component, event, helper) {
        var validitem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if (validitem) {
            // Create the new items
            var newItem = component.get("v.newItem");
            helper.createItem(newItem, component);
        }
    }
})
