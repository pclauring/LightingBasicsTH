({
    createItem : function(item, component) {
        var createEvent = component.getEvent("addItem");
        createEvent.setParams({ "item": item });
        component.set("v.newItem", {
            'sobjectType': 'Camping_Item__c',
            'Name': '',
            'Price__c': 0,
            'Quantity': 0,
            'Packed__c': false
        });
        createEvent.fire();

        // var action = component.get("c.saveItem");
        // action.setParams({
        //     "item": item
        // });
        // action.setCallback(this, function (response) {
        //     var state = response.getState();
        //     if (state === "SUCCESS") {
        //         var items = component.get("v.items");
        //         items.push(response.getReturnValue());
        //         component.set("v.items", items);
        //         component.set("v.newItem", {
        //             'sobjectType': 'Camping_Item__c',
        //             'Name': '',
        //             'Price__c': 0,
        //             'Quantity': 0,
        //             'Packed__c': false
        //         });
        //     }
        // });
        // $A.enqueueAction(action);
    }
})
