import CustomHeader from "@/components/ui/CustomHeader";
import Navbar from "@/components/ui/NavBar";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* NavBar */}
      <Navbar/>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <CustomHeader
          label="About Us"
          button={{
            isVisible: false,
            label: "",
            onClick: () => {}
          }}
        />

        {/* Main Content */}
        <div className="mt-12">
          {/* Company Story */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
            We are a group of randomly assigned 4th Year students in the WebSys class. 
            </p>
            <p className="text-gray-600 mb-4">
            We do not know very much about ReactJs but we are willing to learn from the basics.
            </p>
            <p className="text-gray-600">
            Thank you for your consideration @sir Gian. 
            </p>
          </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
            Our Team
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
                FG
              </div>
              <h3 className="text-lg font-medium text-gray-900">Franz Gabrielle T. Ataguan</h3>
              <p className="text-indigo-600">Group member 1</p>
              <p className="text-gray-600 mt-2">
                {/* Professional Pancit Canton Cooker. */}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
                JC
              </div>
              <h3 className="text-lg font-medium text-gray-900">John Carlo B. Palomillo</h3>
              <p className="text-indigo-600">Group member 2</p>
              <p className="text-gray-600 mt-2">
                
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
                JA
              </div>
              <h3 className="text-lg font-medium text-gray-900">Joszheil Aubrey Reyes</h3>
              <p className="text-indigo-600">Group member 3</p>
              <p className="text-gray-600 mt-2">
                
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
                EJ
              </div>
              <h3 className="text-lg font-medium text-gray-900">Ehla Joy E. Babadilla</h3>
              <p className="text-indigo-600">Group member 4</p>
              <p className="text-gray-600 mt-2">
                
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
                J
              </div>
              <h3 className="text-lg font-medium text-gray-900">Joy F. Espiña</h3>
              <p className="text-indigo-600">Group member 5</p>
              <p className="text-gray-600 mt-2">
                
              </p>
            </div>
          </div>

          
        </div>

        {/* Contact Info */}
        <div className="mt-16 bg-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
              <p className="text-gray-600 mt-2">
                123 Grocery Lane<br />
                Freshville, FK 12345
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Contact Info</h3>
              <p className="text-gray-600 mt-2">
                Email: info@example.com<br />
                Phone: (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}