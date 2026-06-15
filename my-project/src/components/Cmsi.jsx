import React from 'react';
import InfoCard from '../components/InfoCard';
import { 
  BookOpen, Building2, ExternalLink, ShieldCheck, IndianRupee, Rocket, Globe, 
  Calculator, HardHat, Leaf, Flame, Briefcase, Award, FileSignature, Cpu,
  Sun, Laptop, Gavel, Factory, Scale, FileText, Lightbulb, Coins, TrendingUp, Droplet, ShieldAlert, Barcode
} from 'lucide-react';

function LandingPage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="section text-center" style={{ paddingBottom: '2rem' }}>
        <h1 className="section-title">CCMSME Helpline & Portal</h1>
        <p className="section-description" style={{ margin: '0 auto' }}>
          Your ultimate, exhaustive guide to starting, managing, funding, and scaling your business in Kerala. We provide deep-dive explanations on every law, clearance, tax regulation, subsidy, and digital initiative to ensure total ease of doing business for entrepreneurs.
        </p>
      </section>

      {/* Daily Updates Section */}
      <section className="section">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen color="var(--accent-color)" /> MSME Thrissur Daily Updates & Alerts
        </h2>
        <div className="grid-2">
          <InfoCard title="Subsidy Disbursal Camp">
            <p className="text-secondary">
              The District Industries Centre (DIC) Thrissur is organizing a one-day camp for the rapid dispersal of margin money grants. <strong>Date:</strong> Next Friday. <strong>Venue:</strong> DIC Office, Ayyanthole.
            </p>
          </InfoCard>
          <InfoCard title="K-SWIFT System Maintenance">
            <p className="text-secondary">
              Kerala Single Window Interface for Fast and Transparent Clearance (K-SWIFT) will undergo scheduled server maintenance this weekend. Application submissions paused for 48 hours.
            </p>
          </InfoCard>
          <InfoCard title="GeM Vendor Onboarding Drive">
            <p className="text-secondary">
              Special drive by MSME DI to onboard local manufacturers onto the Government e-Marketplace. Bring your Udyam and GST certificates to the Town Hall this Wednesday.
            </p>
          </InfoCard>
          <InfoCard title="Export Promotion Seminar">
            <p className="text-secondary">
              FIEO (Federation of Indian Export Organisations) is hosting a free seminar on 'Navigating European Markets' for Thrissur-based handicraft and agro-processors.
            </p>
          </InfoCard>
        </div>
      </section>

      {/* Legal & Clearances Section */}
      <section className="section">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldCheck color="var(--accent-color)" /> Comprehensive Legal Requirements & Clearances
        </h2>
        <p className="section-description">
          A deep dive into the statutory landscape. Non-compliance can lead to severe penalties, so understanding these clearances is your first priority.
        </p>

        <div className="content-block">
          <h3>The Kerala Micro Small and Medium Enterprises Facilitation Act</h3>
          <p>
            This landmark legislation was enacted to promote the ease of doing business. Anyone establishing an MSME in Kerala with an investment up to ₹50 crores can start their enterprise without waiting for various statutory clearances. 
            Entrepreneurs only need to submit a self-declaration and receive an Acknowledgement Certificate. This gives a <strong>3-year exemption period</strong> to obtain necessary licenses.
          </p>
        </div>

        <div className="content-block">
          <h3>K-SWIFT & Common Application Form (CAF)</h3>
          <p>
            K-SWIFT is the centralized portal for all business clearance needs. Instead of visiting the Fire, Pollution, Labour, and Local Body departments separately, you submit one integrated application.
            If a department fails to respond within the stipulated time limit (usually 15-30 days), the clearance is <strong>deemed to be approved</strong> automatically under the law.
          </p>
        </div>

        <div className="content-block">
          <h3>Panchayat Raj & Local Body Guidelines</h3>
          <ul>
            <li><strong>D&O License (Dangerous & Offensive Trades):</strong> Required before commencing operations that might cause environmental impact, noise, or public nuisance.</li>
            <li><strong>Building Permit & Completion Certificate:</strong> Submit site plans to the local secretary. Industrial sheds must comply with setback rules and floor area ratios (FAR).</li>
          </ul>
        </div>

        <div className="content-block">
          <h3><Leaf size={18} style={{display:'inline', marginRight:'5px'}} /> Specific Industry Licenses (Pollution, Food, Ground Water)</h3>
          <ul>
            <li><strong>KSPCB (Pollution Control Board):</strong> Must obtain 'Consent to Establish' (CTE) before construction, and 'Consent to Operate' (CTO) before production. Industries are categorized into White (Exempt), Green, Orange, and Red based on pollution index.</li>
            <li><strong>FSSAI Registration/License:</strong> Mandatory for any business touching food products. Registration is for petty businesses (turnover &lt; ₹12 Lakhs), while State/Central licenses are for larger units.</li>
            <li><strong>Ground Water Department Clearance:</strong> Required if your industry plans to extract significant amounts of groundwater via borewells, especially in critical or over-exploited blocks in Thrissur.</li>
            <li><strong>Legal Metrology (Weights & Measures):</strong> If you package goods, your weighing scales must be stamped and verified annually. Packaged commodities must adhere to strict labeling declarations (MRP, Mfg Date, Net Weight).</li>
          </ul>
        </div>
        
        <div className="content-block">
          <h3><Factory size={18} style={{display:'inline', marginRight:'5px'}} /> Factories & Boilers Department Approval</h3>
          <p>
            If your manufacturing unit employs 10 or more workers (with power) or 20 or more workers (without power), you must register under the Factories Act, 1948. This ensures factory layouts meet structural stability and ventilation standards. Operation of steam boilers requires separate, rigorous annual inspections.
          </p>
        </div>
      </section>

      {/* Labor Laws & Compliance Section */}
      <section className="section">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Briefcase color="var(--accent-color)" /> Exhaustive Labor Laws & Employee Compliance
        </h2>
        <p className="section-description">
          Protecting your workforce is a strict legal obligation in India. Strict adherence prevents legal liabilities and fosters a productive work environment.
        </p>

        <div className="content-block">
          <h3>EPF & ESI Registration</h3>
          <p>
            <strong>Employees' Provident Fund (EPF):</strong> Mandatory for establishments employing 20 or more persons. Both employer and employee contribute 12% of the basic salary towards retirement benefits.
          </p>
          <p>
            <strong>Employees' State Insurance (ESI):</strong> Mandatory for establishments with 10 or more employees drawing wages up to ₹21,000 per month. Provides medical care, sickness benefits, and disability compensation. Employer contributes 3.25% and employee 0.75%.
          </p>
        </div>

        <div className="content-block">
          <h3><Scale size={18} style={{display:'inline', marginRight:'5px'}} /> Core Labor Acts</h3>
          <ul>
            <li><strong>Minimum Wages Act, 1948:</strong> You must pay wages not less than the minimum rates notified by the Kerala Government for your specific scheduled employment sector.</li>
            <li><strong>Payment of Bonus Act, 1965:</strong> Applicable to factories and establishments employing 20 or more persons. Requires payment of an annual bonus (minimum 8.33% of salary) to eligible employees.</li>
            <li><strong>Maternity Benefit Act, 1961:</strong> Provides for 26 weeks of paid maternity leave for female employees who have worked for at least 80 days in the past 12 months.</li>
            <li><strong>Shops and Commercial Establishments Act:</strong> Regulates working hours, rest intervals, overtime pay (usually double the normal rate), national holidays, and annual leave. Registration must happen within 30 days of opening.</li>
          </ul>
        </div>
      </section>

      {/* Business Registration & Taxation Section */}
      <section className="section">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calculator color="var(--accent-color)" /> Advanced Registration & Taxation (GST & Income Tax)
        </h2>
        <p className="section-description">
          Beyond basic registration, tax compliance offers hidden benefits and protects you from severe penalties.
        </p>

        <div className="content-block">
          <h3>Udyam Registration & The MSMED Act</h3>
          <p>
            Udyam is the gateway to all government schemes. It is a fully online, Aadhaar-based self-declaration system. 
            Crucially, Udyam registration protects you under the <strong>MSMED Act, 2006</strong>. Section 15 mandates that buyers must pay MSMEs within 45 days. If delayed, buyers are liable to pay compound interest at three times the bank rate notified by the RBI. You can file claims through the MSME Samadhaan portal.
          </p>
        </div>

        <div className="content-block">
          <h3>Goods and Services Tax (GST) Intricacies</h3>
          <ul>
            <li><strong>Mandatory Threshold:</strong> Aggregate turnover crossing ₹40 Lakhs (goods) or ₹20 Lakhs (services).</li>
            <li><strong>Composition Scheme:</strong> Taxpayers with turnover up to ₹1.5 Crore can opt for this to pay a flat 1-6% tax without claiming Input Tax Credit (ITC), massively reducing compliance paperwork.</li>
            <li><strong>E-Way Bills:</strong> Mandatory for moving goods worth more than ₹50,000 to track logistics and prevent tax evasion.</li>
            <li><strong>E-Invoicing:</strong> Mandatory for businesses exceeding ₹5 Crore turnover to generate standardized B2B invoices directly reported to the GST portal.</li>
          </ul>
        </div>
        
        <div className="content-block">
          <h3><FileText size={18} style={{display:'inline', marginRight:'5px'}} /> Income Tax Benefits for MSMEs (Section 43B(h))</h3>
          <p>
            A massive recent update to the Income Tax Act (Section 43B(h)) forces large corporate buyers to pay MSMEs on time. If a buyer fails to pay a micro or small enterprise within 45 days, the buyer cannot claim that expense as a tax deduction in that financial year, drastically increasing their tax burden. This forces timely liquidity into your business.
          </p>
          <p>
            Additionally, <strong>Professional Tax</strong> must be deducted from employee salaries and remitted to the local Panchayat/Corporation semi-annually.
          </p>
        </div>
      </section>

      {/* Funding Section */}
      <section className="section">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IndianRupee color="var(--accent-color)" /> Exhaustive Subsidies, Loans & Project Funding
        </h2>
        <p className="section-description">
          Capital is the lifeblood of business. Kerala and the Central Government offer a staggering array of schemes.
        </p>

        <div className="content-block">
          <h3>Central Government Flagship Schemes</h3>
          <ul>
            <li><strong>PMEGP (Prime Minister's Employment Generation Programme):</strong> Margin money subsidy up to 35% in rural areas for manufacturing projects up to ₹50 Lakhs.</li>
            <li><strong>PMFME (PM Formalisation of Micro food processing Enterprises):</strong> Specifically for food processors. Offers 35% credit-linked capital subsidy (up to ₹10 Lakhs) for upgrading existing micro food processing units.</li>
            <li><strong>CGTMSE (Credit Guarantee Fund Trust):</strong> Allows you to get bank loans up to ₹5 Crores WITHOUT collateral security. The government guarantees the loan to the bank.</li>
          </ul>
        </div>

        <div className="content-block">
          <h3>MUDRA, Stand-Up India & SIDBI</h3>
          <p>
            <strong>Pradhan Mantri MUDRA Yojana:</strong> Unsecured loans up to ₹10 Lakhs (Shishu: 50K, Kishore: 5 Lakhs, Tarun: 10 Lakhs).<br/>
            <strong>Stand-Up India:</strong> Loans between ₹10 Lakhs and ₹1 Crore specifically mandated for SC/ST and Women entrepreneurs to set up greenfield enterprises.<br/>
            <strong>SIDBI (Small Industries Development Bank of India):</strong> Offers direct lending schemes like SMILE (SIDBI Make in India Soft Loan Fund for MSME) offering quasi-equity and term loans on relatively soft terms.
          </p>
        </div>

        <div className="content-block">
          <h3>State Schemes (ESS, KFC, KSIDC, KSBCDC)</h3>
          <ul>
            <li><strong>Entrepreneur Support Scheme (ESS):</strong> Kerala's flagship scheme offering up to ₹30 Lakhs capital investment subsidy. Higher rates for women and youth.</li>
            <li><strong>Kerala Financial Corporation (KFC):</strong> CMEDP scheme provides term loans up to ₹1 Crore at a deeply subsidized 5% interest rate.</li>
            <li><strong>KSIDC:</strong> Seed capital and incubation for larger or highly innovative IT/Bio-tech ventures.</li>
            <li><strong>KSBCDC (Backward Classes Development Corp):</strong> Provides specialized microcredit and term loans at very low interest rates (around 6-8%) for entrepreneurs belonging to backward classes and minorities.</li>
          </ul>
        </div>
      </section>

      {/* Technology, Quality & Environment */}
      <section className="section">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Cpu color="var(--accent-color)" /> Technology, Quality, IP & Sustainability
        </h2>
        <p className="section-description">
          Modernizing your operations and protecting your intellectual property ensures global competitiveness.
        </p>

        <div className="content-block">
          <h3><Award size={18} style={{display:'inline', marginRight:'5px'}} /> ZED Certification & Lean Manufacturing</h3>
          <p>
            <strong>Zero Defect Zero Effect (ZED):</strong> Bronze, Silver, and Gold certifications for manufacturing quality products with zero environmental impact. Heavily subsidized certification costs. ZED-certified units get lower interest rates from banks and preference in government tenders. 
            <br/><strong>Lean Manufacturing (LMCS):</strong> Government pays 90% of the cost of hiring a Lean Consultant to implement 5S, Kaizen, and inventory reduction in your factory.
          </p>
        </div>

        <div className="content-block">
          <h3><Laptop size={18} style={{display:'inline', marginRight:'5px'}} /> Digital MSME & IT Adoption</h3>
          <p>
            The <strong>Digital MSME Scheme</strong> subsidizes the cost of adopting Cloud-based ERP (Enterprise Resource Planning), accounting, and production management software to move away from manual ledgers.
          </p>
        </div>

        <div className="content-block">
          <h3><FileSignature size={18} style={{display:'inline', marginRight:'5px'}} /> Intellectual Property Rights (IPR)</h3>
          <p>
            The Ministry of MSME reimburses costs associated with registering Patents (up to ₹1 Lakh for domestic, ₹5 Lakhs for foreign), Trademarks (up to ₹10,000), and Geographical Indications (GI). You also get an 80% fee reduction when filing patents as an MSME compared to large corporations.
          </p>
        </div>

        <div className="content-block">
          <h3><Sun size={18} style={{display:'inline', marginRight:'5px'}} /> Sustainability & Solar Initiatives</h3>
          <p>
            <strong>ANERT (Agency for New and Renewable Energy Research and Technology):</strong> Provides subsidies and technical support for installing rooftop solar power plants in industrial units, drastically cutting electricity overheads. Energy Audits are also subsidized by the DIC to identify power wastage in your machinery.
          </p>
        </div>
      </section>

      {/* Export & Marketing Section */}
      <section className="section">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Globe color="var(--accent-color)" /> Advanced Marketing & Export Promotion
        </h2>
        <p className="section-description">
          Government programs designed to take your locally manufactured product to global markets.
        </p>

        <div className="content-block">
          <h3>International Cooperation & Market Development Assistance (MDA)</h3>
          <p>
            The IC Scheme and State MDA scheme reimburse MSMEs for participating in international trade fairs. You can claim back airfare, stall rent, and freight charges. This lowers the risk of exploring foreign markets.
          </p>
        </div>

        <div className="content-block">
          <h3>Public Procurement Policy & GeM</h3>
          <p>
            Central Govt PSUs must buy 25% of their goods from MSMEs (with a 4% sub-target for SC/ST and 3% for Women). By onboarding onto <strong>GeM (Government e-Marketplace)</strong>, you can directly bid on tenders across India. MSMEs are completely exempted from paying Earnest Money Deposits (EMD) and tender fees.
          </p>
        </div>

        <div className="content-block">
          <h3><Barcode size={18} style={{display:'inline', marginRight:'5px'}} /> Barcode Registration Subsidy</h3>
          <p>
            To sell in supermarkets or export, GS1 Barcodes are mandatory. The government provides financial assistance covering 75% of the one-time registration fee and 75% of the annual recurring fee for the first three years for adopting GS1 barcodes.
          </p>
        </div>
      </section>

      {/* Startup Ecosystem Section */}
      <section className="section">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Rocket color="var(--accent-color)" /> Startup Ecosystem, Innovation & Women Empowerment
        </h2>
        <p className="section-description">
          For highly innovative, scalable, tech-driven businesses, the startup ecosystem provides venture-style support.
        </p>

        <div className="content-block">
          <h3>Kerala Startup Mission (KSUM) & K-DISC</h3>
          <ul>
            <li><strong>Innovation Grants:</strong> Idea grants (₹2 Lakhs), Productization grants (₹7 Lakhs), and Scale-up grants (₹12 Lakhs).</li>
            <li><strong>Startup India Seed Fund Scheme (SISFS):</strong> Provides financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.</li>
            <li><strong>K-DISC (Kerala Development and Innovation Strategic Council):</strong> Runs the Young Innovators Programme (YIP) offering specialized mentorship and funding for student and youth-led deep-tech projects.</li>
          </ul>
        </div>

        <div className="content-block">
          <h3>Women Empowerment: WE-Mission Kerala</h3>
          <p>
            Women-led startups receive soft loans up to ₹15 Lakhs at just 6% interest. They are provided special quotas in government procurement, subsidized participation in international tech expos, and dedicated mentorship from successful female founders. The Kerala State Women's Development Corporation (KSWDC) also offers specialized low-interest business loans.
          </p>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="section text-center" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <p className="text-secondary">© 2026 CCMSME Helpline & Portal. Empowering Entrepreneurs in Kerala.</p>
      </footer> */}
    </div>
  );
}

export default LandingPage;
