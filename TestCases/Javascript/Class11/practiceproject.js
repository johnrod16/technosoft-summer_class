/**
 * Restaurant
 *      register
 *          user will provide name of restaurant, address, maxCapacity, employees
 *          On successful registration, every restaurant will be given a unique id
 *          user should not re-register
 *      open
 *          user should open restaurant
 *          user should not be able to open restaurant if already open
 *      close
 *          user should close restaurant
 *          user should not be able to close restaurant if already close
 *      clean
 *          user should able to use clean-method to clean restaurant
 *      permanentlyClose
 *          user should be able to permanently close restaurant
 *          if permanently deleted:
 *              user should not be able to perform any action(open/close/clean/showDetails etc) for restaurant unless re-register it
 *      showTotalEmployees
 *      addEmployee
 *      removeEmployee
 *      addGuest
 *      removeGuest
 *      showRestaurantDetails
 *          name:
 *          restaurant-id:
 *          address:
 *          total guests sitting as of now:
 *          total guests served as of now:
 *      showAllRestaurantDetails
 *          Total number of restaurants:
 *          show below details of every restaurant
 *              name:
 *              restaurant-id:
 *              address:
 *              total guests served as of now:
 * 
 * 
 * House
 *      register
 *          user will provide name of location, members
 *          On successful registration, every house will be given a unique id
 *          user should not re-register
 *      unlock
 *          user should unlock house
 *          user should not be able to unlock house if already unlocked
 *      lock
 *          user should lock house
 *          user should not be able to lock house if already locked
 *      clean
 *          user should able to use clean-method to clean house
 *      demolished
 *          user should be able to demolish a house
 *          if demolished:
 *              user should not be able to perform any action(open/close/clean/showDetails etc) for restaurant unless re-register it
 *      showTotalMembers
 *      addMember
 *      removeMember
 *      showHouseDetails
 *          house-id:
 *          address:
 *          total members:
 *      showAllHouseDetails
 *          Total number of houses: 
 *          show below details of every house
 *              house-id:
 *              address:
 *              total members;
 */