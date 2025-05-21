
// Navigation structure for the site
export const navStructure = {
  home: {
    title: 'Home',
    path: '/'
  },
  aboutUs: {
    title: 'About Us',
    path: '/about'
  },
  solutions: {
    title: 'Solutions',
    path: '/services',
    items: [{
      name: 'Global Payroll Management',
      path: '/services/managed-payroll-services'
    }, {
      name: 'Remote Talent Solutions',
      path: '/services/remote-talent-solutions'
    }, {
      name: 'Employer of Record EOR',
      path: '/services/employer-of-record'
    }, {
      name: 'Outsourcing Accounting',
      path: '/services/outsourcing-accounting'
    }]
  },
  globalPayrollSoftware: {
    title: 'Global Payroll Software',
    path: '/products/payroll-software'
  },
  globalCoverage: {
    title: 'Global Coverage',
    path: '/global-coverage'
  },
  contact: {
    title: 'Contact',
    path: '/contact'
  }
};
