({
    clickCreateItem: function (component, event, helper) {
        var validitem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if (validitem) {
            // Create the new expense
            var newItem = component.get("v.newItem");
            console.log("Create item: " + JSON.stringify(newItem));


            var items = component.get("v.items");
            items.push(newItem);
            component.set("v.items", items);
            component.set("v.newItem", {
                'sobjectType': 'Camping_Item__c',
                'Name': '',
                'Price__c': 0,
                'Quantity': 0,
                'Packed__c': false
            });

        }
    }
})
