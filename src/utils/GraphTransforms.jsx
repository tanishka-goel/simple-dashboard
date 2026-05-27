export const transformProductsToCategoryData = (products) => {
  if (!products) return [];

  const map = {};

  products.forEach((product) => {
    const category = product.category;

    map[category] = (map[category] || 0) + 1;
  });

  return Object.keys(map).map((key) => ({
    name: key,
    value: map[key],
  }));
};

export const getAveragePriceByCategory = (products) => {
  if (!products) return [];
  const categoryMap = {};

  products.forEach((prod) => {
    if (!categoryMap[prod.category]) {
      categoryMap[prod.category] = {
        total: 0,
        count: 0,
      };
    }
    categoryMap[prod.category].total += prod.price;
    categoryMap[prod.category].count += 1;
  });

  return Object.keys(categoryMap).map((cat) => ({
    name: cat,
    value: (categoryMap[cat].total / categoryMap[cat].count).toFixed(2),
  }));
};

export const getShippingTime = (prods = []) => {
  const shippingTime = {
    "Less than a day": 0,
    "Within a week": 0,
    "Within 2 weeks": 0,
    "Within a month": 0,
  };

  prods.forEach((prod) => {
    const st = prod?.shippingInformation;
    if (!st) return;

    if (st === "Ships overnight") {
      shippingTime["Less than a day"]++;
    } else if (
      st === "Ships in 1-2 business days" ||
      st === "Ships in 3-5 business days" ||
      st === "Ships in 1 week"
    ) {
      shippingTime["Within a week"]++;
    } else if (st === "Ships in 2 weeks") {
      shippingTime["Within 2 weeks"]++;
    } else {
      shippingTime["Within a month"]++;
    }
  });

  return Object.entries(shippingTime).map(([name, value]) => ({
    name,
    value,
  }));
};

// ====================== USER ==============================

export const getBloodGroups = (users) => {
  if (!users) return [];
  const bloodGroupMap = {};
  users.forEach((user) => {
    if (!bloodGroupMap[user.bloodGroup]) {
      bloodGroupMap[user.bloodGroup] = 0;
    }
    bloodGroupMap[user.bloodGroup] += 1;
  });

  return Object.keys(bloodGroupMap).map((key) => ({
    name: key,
    value: bloodGroupMap[key],
  }));
};

export const getBMI = (users) => {
  if (!users) return [];

  const bmicats = {
    underweight: 0,
    healthy: 0,
    overwieght: 0,
    obese: 0,
  };

  users.forEach((user) => {
    const height = user.height / 100;
    const weight = user.weight;

    const bmi = weight / (height * height);

    if (bmi < 18.5) bmicats.underweight++;
    else if (bmi >= 18.5 && bmi <= 24.9) {
      bmicats.healthy++;
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmicats.overwieght++;
    } else {
      bmicats.obese++;
    }
  });

  return Object.entries(bmicats).map(([name, value]) => ({
    name,
    value,
  }));
};

export const getUserByCountry = (users) => {
  if (!users) return [];

  const countryMap = {};

  users.forEach((user) => {
    if (!countryMap[user?.address?.city]) {
      countryMap[user?.address?.city] = 0;
    }
    countryMap[user?.address?.city] += 1;
  });

  return Object.keys(countryMap).map((key) => ({
    name: key,
    value: countryMap[key],
  }));
};

export const transformUsersByAgeGroup = (users) => {
  if (!users) return [];

  const groups = {
    "18-25": 0,
    "26-35": 0,
    "36-50": 0,
    "50+": 0,
  };

  users.forEach((user) => {
    const age = user.age;

    if (age <= 25) groups["18-25"]++;
    else if (age <= 35) groups["26-35"]++;
    else if (age <= 50) groups["36-50"]++;
    else groups["50+"]++;
  });

  return Object.keys(groups).map((key) => ({
    name: key,
    value: groups[key],
  }));
};

export const getGenderByRole = (users)=>{
  if (!users) return [];
  const mapp={}

  users.forEach((user)=>{
    const role = user.role
    const gender = user.gender

    if (!role || !gender) return;

    if(!mapp[role]){
      mapp[role]={
        name:role,
        female:0,
        male:0
      }
    }

    if(gender.toLowerCase()==="male"){
      mapp[role].male++
    } else{
      mapp[role].female++
    }

  })
  return Object.values(mapp)
}