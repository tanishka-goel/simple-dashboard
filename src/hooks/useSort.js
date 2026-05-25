import { useMemo, useState } from "react";

export function useSort(data) {
  const [sortedVal, setSortedVal] = useState("all");

  const sortedData = useMemo(() => {
    if (!data) return;

    const sorted = [...data];
    switch (sortedVal) {
      case "nameatoz":
        return sorted.sort((a, b) =>
          a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase()),
        );
    
       case "nameztoa":
        return sorted.sort((a, b) =>
          b.firstName.toLowerCase().localeCompare(a.firstName.toLowerCase()),
        ); 

        case "ageasc":
        return sorted.sort((a, b) =>
          a.age - b.age
        );
        

        case "agedesc":
        return sorted.sort((a, b) =>
          b.age - a.age
        );

        case "cityatoz":
        return sorted.sort((a, b) =>
          a.address?.city.toLowerCase().localeCompare(b.address?.city.toLowerCase()),
        );

        case "cityztoa":
        return sorted.sort((a, b) =>
          b.address?.city.toLowerCase().localeCompare(a.address?.city.toLowerCase()),
        );

        case "companyatoz":
        return sorted.sort((a, b) =>
           a.company?.name?.toLowerCase().localeCompare(b.company?.name.toLowerCase()),
        );

        case "companyztoa":
        return sorted.sort((a, b) =>
          b.company?.name?.toLowerCase().localeCompare(a.company?.name.toLowerCase()),
        );

        default:
        return sorted;
    }
  }, [data, sortedVal]);

   return { sortedVal, setSortedVal, sortedData };
}
