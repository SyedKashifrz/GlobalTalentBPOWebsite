
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

const Resources = () => {
  React.useEffect(() => {
    document.title = "Resources & Attachments | The Global Talent BPO";
  }, []);

  // Define the resources/attachments
  const resources = [
    {
      id: 1,
      title: "Global Payroll Management Guide",
      description: "A comprehensive guide to managing global payroll operations efficiently",
      category: "Payroll",
      fileType: "PDF",
      fileSize: "2.4 MB",
      downloadUrl: "/downloads/global-payroll-guide.pdf"
    },
    {
      id: 2,
      title: "Remote Talent Hiring Best Practices",
      description: "Learn the best strategies for hiring and managing remote talent globally",
      category: "Recruitment",
      fileType: "PDF",
      fileSize: "1.8 MB",
      downloadUrl: "/downloads/remote-talent-hiring.pdf"
    },
    {
      id: 3,
      title: "Employer of Record (EOR) Explained",
      description: "Understand how EOR services can help your business expand globally",
      category: "EOR",
      fileType: "PDF",
      fileSize: "3.1 MB",
      downloadUrl: "/downloads/eor-explained.pdf"
    },
    {
      id: 4,
      title: "Outsourced Accounting Benefits",
      description: "Discover how outsourced accounting can benefit your business operations",
      category: "Accounting",
      fileType: "PDF",
      fileSize: "2.2 MB",
      downloadUrl: "/downloads/outsourced-accounting.pdf"
    },
    {
      id: 5,
      title: "Global Employment Compliance Checklist",
      description: "Essential compliance checklist for employers operating in multiple countries",
      category: "Compliance",
      fileType: "PDF",
      fileSize: "1.5 MB",
      downloadUrl: "/downloads/global-compliance-checklist.pdf"
    }
  ];

  return (
    <main className="pt-28">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Resources & Attachments</h1>
          <p className="text-lg text-[rgb(31,31,31)] mb-12">
            Access our collection of helpful resources, guides, and documents to support your global talent and business operations.
          </p>

          <div className="space-y-6">
            {resources.map((resource) => (
              <div key={resource.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <FileText className="h-6 w-6 text-[rgb(26,13,171)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-3">{resource.description}</p>
                      <div className="flex space-x-4 text-sm text-gray-500">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">{resource.category}</span>
                        <span>{resource.fileType}</span>
                        <span>{resource.fileSize}</span>
                      </div>
                    </div>
                  </div>
                  <a 
                    href={resource.downloadUrl} 
                    className="flex items-center text-[rgb(26,13,171)] hover:text-[rgb(46,33,191)] font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need More Information?</h2>
            <p className="text-[rgb(31,31,31)] mb-6">
              Contact our team to request specific resources or to discuss how our services can address your business needs.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resources;
