import {
  Package,
  Undo2,
  MapPin,
  CreditCard,
  UserCircle,
  TabletSmartphone
} from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-medium mb-6 text-gray-800">
        Some things you can do here
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Card 1: Your Orders */}
        <div className="flex items-start p-5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors shadow-sm">
          <div className="mr-4 flex-shrink-0">
            <Package size={40} Width={1.5} className="text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Your Orders</h3>
            <p className="text-sm text-gray-600 mt-3">Track packages</p>
            <p className="text-sm text-gray-600 mt-3">Edit or cancel orders</p>
          </div>
        </div>

        {/* Card 2: Returns and Refunds */}
        <div className="flex items-start p-5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors shadow-sm">
          <div className="mr-4 flex-shrink-0">
            <Undo2 size={40} Width={1.5} className="text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Returns and Refunds</h3>
            <p className="text-sm text-gray-600 mt-3">Return or exchange items</p>
            <p className="text-sm text-gray-600 mt-3">Print return mailing labels</p>
          </div>
        </div>

        {/* Card 3: Manage Addresses */}
        <div className="flex items-start p-5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors shadow-sm">
          <div className="mr-4 flex-shrink-0">
            <MapPin size={40} Width={1.5} className="text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Manage Addresses</h3>
            <p className="text-sm text-gray-600 mt-3">Update your addresses</p>
            <p className="text-sm text-gray-600 mt-3">Add address, landmark details</p>
          </div>
        </div>

        {/* Card 4: Payment Settings */}
        <div className="flex items-start p-5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors shadow-sm">
          <div className="mr-4 flex-shrink-0">
            <CreditCard size={40} Width={1.5} className="text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Payment Settings</h3>
            <p className="text-sm text-gray-600 mt-3">Add or edit payment methods</p>
            <p className="text-sm text-gray-600 mt-3">Change expired debit or credit card</p>
          </div>
        </div>

        {/* Card 5: Account Settings */}
        <div className="flex items-start p-5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors shadow-sm">
          <div className="mr-4 flex-shrink-0">
            <UserCircle size={40} Width={1.5} className="text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Account Settings</h3>
            <p className="text-sm text-gray-600 mt-3">Change your email or password</p>
            <p className="text-sm text-gray-600 mt-3">Update login information</p>
          </div>
        </div>

        {/* Card 6: Digital Services */}
        <div className="flex items-start p-5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors shadow-sm">
          <div className="mr-4 flex-shrink-0">
            <TabletSmartphone size={40} Width={1.5} className="text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Digital Services</h3>
            <p className="text-sm text-gray-600 mt-3">Find device help and support</p>
            <p className="text-sm text-gray-600 mt-3">Troubleshoot device issues</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;