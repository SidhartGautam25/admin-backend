import Report from "../models/Report.js";

export const cReport = async (req, res, next) => {
  // console.log("landed on create report ", req.body.related);
  let rep = {
    title: req.body.title,
    id: req.body.id,
    slug: req.body.slug,
    shortTitle: req.body.shortTitle,
    desc: req.body.shortTitle,
    subTitle: req.body.subTitle,
    metaTitle: req.body.metaTitle,
    geography: req.body.geographyTag,
    country: req.body.countryRegion,
    pSingle: req.body.priceSingle,
    pTeam: req.body.priceTeam,
    pCorp: req.body.priceCorporate,
    pDate: req.body.publishedDate,
    rReports: req.body.relatedReports,
    industry: req.body.category,
    subind: req.body.subCategory,
    metaKey: req.body.metaKeywords,
    metaDesc: req.body.metaDescription,
    msHeading: req.body.msHeading,
    msDesc: req.body.msContent,
    msTable: req.body.msTables,
    moTitle: req.body.moHeading,
    moDesc: req.body.moContent,
    sorTitle: req.body.srHeading,
    sorDesc: req.body.srContent,
    clTitle: req.body.clHeading,
    clDesc: req.body.Content,
    mp: req.body.mpCompanies,
    mpTitle: req.body.mpHeading,
    toc: req.body.tocContent,
    faqTitle: req.body.fsHeading,
    faqs: req.body.fsFaqs,
    rDevDesc: req.body.rdContent,
    rDevTitle: req.body.rdHeading,
    kmtTitle: req.body.ktHeading,
    kmtdesc1: req.body.ktContent1,
    kmti1: req.body.ktImage,
    kmti1alt: req.body.ktImageAlt1,
    kmtsh1: req.body.ktSubHeading,
    kmtdesc2: req.body.ktContent2,
    kmtsh2: req.body.ktSubHeading2,
    kmti2: req.body.ktImage2,
    kmti2alt: req.body.ktImageAlt2,
    base: "",
    forcast: "",
    study: "",
    linki1: req.body.linki1,
    linki2: req.body.linki2,
    alti1: req.body.alti1,
    alti2: req.body.alti2,
    related: req.body.related ?? [],
  };
  console.log("started");
  const newReport = new Report(rep);
  console.log("started 2");

  try {
    console.log("started 3");
    const savedReport = await newReport.save();
    console.log("started 4");

    res.status(200).json(savedReport);
  } catch (err) {
    console.log("erorr occured ", err);
    next(err);
  }
};

export const editReport = async (req, res, next) => {
  // console.log("landed on edit report ", req.body.related);
  let rep = {
    title: req.body.title,
    id: req.body.id,
    slug: req.body.slug,
    shortTitle: req.body.shortTitle,
    desc: req.body.shortTitle,
    subTitle: req.body.subTitle,
    metaTitle: req.body.metaTitle,
    geography: req.body.geographyTag,
    country: req.body.countryRegion,
    pSingle: req.body.priceSingle,
    pTeam: req.body.priceTeam,
    pCorp: req.body.priceCorporate,
    pDate: req.body.publishedDate,
    rReports: req.body.relatedReports,
    industry: req.body.category,
    subind: req.body.subCategory,
    metaKey: req.body.metaKeywords,
    metaDesc: req.body.metaDescription,
    msHeading: req.body.msHeading,
    msDesc: req.body.msDesc,
    msTable: req.body.msTable,
    moTitle: req.body.moTitle,
    moDesc: req.body.moDesc,
    sorTitle: req.body.sorTitle,
    sorDesc: req.body.sorDesc,
    clTitle: req.body.clTitle,
    clDesc: req.body.clDesc,
    mp: req.body.mp,
    mpTitle: req.body.mpTitle,
    toc: req.body.toc,
    faqTitle: req.body.faqTitle,
    faqs: req.body.faqs,
    rDevDesc: req.body.rDevDesc,
    rDevTitle: req.body.rDevTitle,
    kmtTitle: req.body.kmtTitle,
    kmtdesc1: req.body.kmtdesc1,
    kmti1: req.body.kmti1,
    kmti1alt: req.body.kmti1alt,
    kmtsh1: req.body.kmtsh1,
    kmtdesc2: req.body.kmtdesc2,
    kmtsh2: req.body.kmtsh2,
    kmti2: req.body.kmti2,
    kmti2alt: req.body.kmti2alt,
    base: "",
    forcast: "",
    study: "",
    linki1: req.body.linki1,
    linki2: req.body.linki2,
    alti1: req.body.alti1,
    alti2: req.body.alti2,
    related: req.body.related ?? [],
  };
  const reportId = req.body._id; // Assuming `_id` is passed in the request body
  if (!reportId) {
    return res.status(400).json({ message: "Report ID is required" });
  }
  try {
    const updatedReport = await Report.findByIdAndUpdate(reportId, rep, {
      new: true, // Return the updated document
      runValidators: true, // Ensure schema validation is applied
    });

    if (!updatedReport) {
      return res.status(404).json({ message: "Report not found" });
    }

    console.log("Report updated successfully");
    res.status(200).json(updatedReport);
  } catch (err) {
    return res.status(400).json({ message: "Error occured while updating" });
  }
};
