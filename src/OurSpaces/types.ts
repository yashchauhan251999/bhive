export interface iSpace {
    id:                         string;
    name:                       string;
    address:                    string;
    latitude:                   number;
    longitude:                  number;
    googleMapsURL?:             string;
    city:                       string;
    state:                      string;
    country:                    string;
    postalCode:                 string;
    description:                null;
    rules:                      null;
    amenities:                  string[] | null;
    images:                     string[];
    workingHoursStart:          string;
    workingHoursEnd:            string;
    contactPersonName?:         string;
    facilities:                 null;
    isActive:                   boolean;
    isDayPassEnabled:           boolean;
    day_pass_price:               number;
    day_pass_discounts_percentage: { [key: string]: iDayPassDiscountsPercentage };
    managerID:                  null;
    canEdit?:                   boolean;
}

export interface iDayPassDiscountsPercentage {
    value:   number;
    message: Message;
}

export enum Message {
    Empty = "",
    PayFor8DaysGet2DaysComplimentary = "Pay for 8 Days, Get 2 Days Complimentary",
}
