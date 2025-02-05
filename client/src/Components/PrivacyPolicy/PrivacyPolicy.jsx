import React from "react";
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
const PrivacyPolicy = () => {
  const { t ,i18n} = useTranslation(); 
  const isRTL = i18n.dir() === "rtl"; 
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"; 
  }, [isRTL]);
  return (
    <div>
{isRTL ? (
    <div className="max-w-4xl mx-auto p-6 mt-20 text-gray-800">
      <h1 className="text-3xl font-bold text-Green">سياسة الخصوصية</h1>
      <p className="text-sm text-gray-500 mt-1">الإصدار 1.0 آخر تحديث في <span className="text-Green">29/06/2024</span></p>
      
      <p className="mt-4">
        تلتزم RewardClub باحترام خصوصية كل من يستخدم مواقعنا الإلكترونية وتطبيقاتنا المحمولة ("المواقع/التطبيقات") وحماية أي معلومات شخصية يمكننا جمعها على مواقعنا/تطبيقاتنا واستخدامها كجزء من عملية جمع البيانات.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. نطاق التطبيق والشمولية</h2>
      <p className="mt-2">
        تنطق هذه السياسة ("البيان") على تطبيقات RewardClub المحمولة المتاحة على
        <a href="https://www.RewardClub-mena.com" className="text-blue-600"> www.RewardClub-mena.com</a>. كما تنطبق على المعلومات الشخصية التي نعالجها عندما تزور أحد متاجرنا في قطر، الكويت، الإمارات العربية المتحدة، أو المملكة العربية السعودية أثناء استخدام تطبيقاتنا.
      </p>

      <ul className="list-disc pl-6 mt-4">
        <li>تعزيز وزيادة خطوط أعمال التجزئة لـ RewardClub.</li>
        <li>دعم المشاركة المستمرة لتحفيز العملاء.</li>
        <li>توسيع قاعدة بيانات العملاء لأنشطة التسويق الشخصية.</li>
        <li>عروض ومكافآت مستمرة من العلامات التجارية المشاركة.</li>
        <li>المشاركة في السحوبات.</li>
      </ul>

      <p className="mt-4 ">
        RewardClub، المقر الرئيسي في برج RewardClub، شارع السور، المرقاب،
        صندوق بريد 181، الصفاة 13002، الكويت. يمكنك الاتصال بنا عبر
        <a href="https://RewardClub-mena.com/contact" className="text-blue-600"> RewardClub-mena.com/contact</a>
        أو البريد الإلكتروني <a href="mailto:dpo@RewardClub.com" className="text-blue-600">dpo@RewardClub.com</a>.
      </p>
      
      <h2 className="text-xl font-semibold mb-1 mt-6">2. تحديثات سياسة الخصوصية</h2>
      <p className="mt-2">
        كان هذا البيان ساري المفعول في تاريخ "آخر تحديث" المذكور أعلى هذه الصفحة. قد يتم تحديث هذا البيان من وقت لآخر. يرجى التحقق من تاريخ "آخر تحديث" عند الوصول إلى الموقع الإلكتروني أو التطبيق.
      </p>

      <h2 className="text-xl font-semibold mb-1 mt-6">3. كيفية معالجة بياناتك الشخصية</h2>
      <p className="mt-2">
        سنستخدم بياناتك الشخصية فقط عندما يسمح لنا القانون بذلك. في معظم الأحيان، سنستخدم بياناتك الشخصية في الحالات التالية:
      </p>

      <div>
        <h2 className="text-xl mb-1 font-bold">الموافقة</h2>
        <div>
          <p>عندما تمنحنا موافقتك، على سبيل المثال، للوصول إلى جهات الاتصال على هاتفك أو السماح لنا بالوصول إلى موقعك. لديك الحق في سحب موافقتك في أي وقت. لسحب موافقتك، انتقل إلى إعدادات الخصوصية في تطبيقنا المحمول على Android أو iOS أو اتصل بنا على <a href="mailto:support@RewardClub-mena.com" className="text-blue-500">support@RewardClub-mena.com</a>.</p>
        </div>

        <h2 className="text-xl font-bold mb-1 mt-4">العقد</h2>
        <div>
          <p>عندما نحتاج إلى تنفيذ عقد قمت بإبرامه معنا من خلال قبول شروط وأحكام RewardClub المناسبة. إذا كنا بحاجة إلى جمع بيانات شخصية بموجب شروط العقد الذي لدينا معك، وفشلت في تقديم هذه البيانات عند الطلب، قد لا نتمكن من تقديم خدماتنا بموجب العقد الذي لدينا أو نحاول إبرامه معك (على سبيل المثال، لتقديم أي من خدماتنا). في هذه الحالة، قد نضطر إلى إلغاء الخدمة التي لديك معنا، ولكننا سنخطرك بذلك في ذلك الوقت.</p>
        </div>

        <h2 className="text-xl font-bold mb-1 mt-4">الالتزام القانوني أو التنظيمي</h2>
        <div>
          <p>عندما نحتاج إلى جمع بيانات شخصية بموجب القانون. إذا فشلت في تقديم هذه البيانات عند الطلب، لن نتمكن من تقديم خدماتنا بموجب العقد معك (على سبيل المثال، لتقديم أي من منتجاتنا أو خدماتنا). في هذه الحالة، سنضطر إلى إلغاء المنتج أو الخدمة التي لديك معنا، وسنخطرك بذلك في ذلك الوقت.</p>
        </div>

        <h2 className="text-xl font-bold mb-1 mt-4">الاتصالات عبر البريد الإلكتروني، الإشعارات الدفعية، والرسائل داخل التطبيق</h2>
        <div>
          <p>يسمح التطبيق لجميع المستخدمين بتعيين تفضيلاتهم لاستلام الاتصالات الترويجية عبر البريد الإلكتروني من RewardClub، واستلام الإشعارات الدفعية على جهازك، واستلام الرسائل داخل التطبيق. يرجى ملاحظة أنه يمكنك إلغاء الاشتراك في استلام الاتصالات عبر البريد الإلكتروني في أي وقت عن طريق تعديل إعدادات حسابك عبر الإنترنت في RewardClub بالانتقال إلى "حسابي" → "الإعدادات" → "تفضيلات الاتصالات"، أو بالنقر على رابط "إلغاء الاشتراك" الموجود في أي بريد إلكتروني ترويجي نرسله لك.</p>
          <p>يرجى ملاحظة أنه بمجرد إلغاء الاشتراك تمامًا من الاتصالات التسويقية الخاصة بنا، قد تستغرق تفضيلاتك حتى 48 ساعة للتحديث. قد لا نتمكن من إعلامك بالعروض المخصصة التي تلبي احتياجاتك، ولكنك ستستمر في تلقي الرسائل التشغيلية والخدمية منا فيما يتعلق بحسابك في RewardClub.</p>
        </div>

        <h2 className="text-xl font-bold mb-1 mt-4">6. القرارات الآلية - بما في ذلك التنميط - ومعالجة الاحتيال</h2>
        <div>
          <p>تهدف RewardClub إلى بناء صورة مفصلة عنك، بما في ذلك معلومات مثل الدوافع الفردية، وما تقدره في العلامة التجارية، ونوع الاتصال الذي تفضله. سيتم إدارة التقسيم من قبلنا بناءً على بيانات ملفك الشخصي، وسجل المعاملات، وسلوك برنامج الولاء المسجل في قاعدة البيانات الخاصة بنا.</p>
          <p>ستقوم RewardClub بمراقبة المعاملات الواردة وأنشطة الأعضاء باستمرار لتحديد السلوك الاحتيالي المحتمل بوسائل آلية. سيتم التحقيق في الأنشطة المشبوهة المتعلقة بالاحتيال، وكذلك المراقبة المستمرة للتقارير المتعلقة بالاحتيال، من قبل موظفينا. سنقوم بحظر أي معاملات تم الإبلاغ عنها كمشبوهة في حالة تأكيد سلوك احتيالي مشبوه بعد مراجعته من قبل وكيل خدمة العملاء لدينا. لمزيد من المعلومات، يرجى قراءة شروط استخدام RewardClub بعناية.</p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1 mt-6">7. خياراتك وحقوقك في حماية البيانات</h3>
        <p>سحب موافقتك في أي وقت عندما نعتمد على الموافقة لمعالجة بياناتك الشخصية. ومع ذلك، لن يؤثر ذلك على شرعية أي معالجة تمت قبل سحب موافقتك. إذا قمت بسحب موافقتك، قد لا نتمكن من تقديم بعض المنتجات أو الخدمات لك. لديك التحكم في تفضيلات الاتصالات الترويجية، وظائف التطبيق المحمول، إعدادات ملفات تعريف الارتباط، وتفضيلات الإعلانات المستهدفة عن طريق الانتقال إلى "حسابي" → "الإعدادات" أو الاتصال بنا على https://RewardClub-mena.com/contact-us أو support@RewardClub-mena.com</p><br />
        <br />
        <p>طلب الوصول إلى بياناتك الشخصية (المعروف باسم "طلب الوصول إلى البيانات"). يتيح لك ذلك الحصول على نسخة من البيانات الشخصية التي نحتفظ بها عنك بتنسيق منظم، شائع الاستخدام، وقابل للقراءة الآلية، والتحقق من أننا نعالجها بشكل قانوني.</p><br />
        <br />
        <p>طلب الاعتراض على المعالجة إذا لم تكن هذه المعالجة ضرورية لتحقيق الأهداف التي تم جمع بياناتك الشخصية من أجلها أو إذا كانت البيانات الشخصية التي تم جمعها تتجاوز الحد المطلوب، أو تمييزية، أو غير عادلة، أو غير قانونية.</p><br />
        <br />
        <p>طلب حذف بياناتك الشخصية. يتيح لك ذلك أن تطلب منا حذف أو إزالة البيانات الشخصية عند انتهاء الغرض من المعالجة، أو عندما تتوقف جميع المبررات للاحتفاظ بهذه البيانات الشخصية من قبلنا.</p><br />
        <br />
        <p>طلب تصحيح البيانات الشخصية التي نحتفظ بها عنك، والتي يجب أن تكون مصحوبة بإثبات دقة هذا الطلب. يتيح لك ذلك تصحيح أي بيانات غير كاملة أو غير دقيقة نحتفظ بها عنك، على الرغم من أننا قد نحتاج إلى التحقق من دقة البيانات الجديدة التي تقدمها لنا.</p><br />
        <br />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1 mt-6">8. كيف نحمي بياناتك الشخصية</h3>
        <p>نحمي معلوماتك باستخدام تدابير أمنية تقنية، مادية، وإدارية لتقليل خطر الفقد، سوء الاستخدام، الوصول غير المصرح به، الكشف، أو التعديل على معلوماتك. عندما تقوم بإرسال معلومات حساسة للغاية (مثل رقم بطاقة الائتمان) عبر موقعنا الإلكتروني أو في أحد تطبيقاتنا المحمولة، نقوم بتشفير إرسال هذه المعلومات باستخدام بروتوكول Secure Sockets Layer (SSL). أنت مسؤول عن حماية كلمة المرور الخاصة بك والحفاظ على أمان أجهزتك.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1 mt-6">9. الاحتفاظ بالتخلص من بياناتك الشخصية</h3>
        <p>نحتفظ بالبيانات الشخصية حسب الحاجة لتحقيق الأهداف المحددة في هذا البيان ولتلبية المتطلبات القانونية، بما في ذلك الاحتفاظ بالسجلات، وحل النزاعات، وإنفاذ اتفاقياتنا. يتم تحديد فترة الاحتفاظ ببياناتك الشخصية بموجب القانون المعمول به. قد تمتد فترة التخزين هذه إلى ما بعد مدة علاقتك معنا.</p><br />
        <br />
        <p>كقاعدة عامة، نحتفظ ببياناتك الشخصية فقط طالما كانت هناك حاجة لإكمال الغرض الذي تم جمعها من أجله أو كما يقتضي القانون. قد نحتاج إلى الاحتفاظ ببياناتك الشخصية لفترة أطول من فترات الاحتفاظ المحددة لتلبية طلباتك أو للامتثال للالتزامات القانونية، التنظيمية، المحاسبية، أو غيرها. على سبيل المثال، قد تخضع البيانات الشخصية الواردة في العقود، الاتصالات، والرسائل التجارية لمتطلبات الاحتفاظ القانونية، والتي قد تتطلب الاحتفاظ بها لمدة تصل إلى 10 سنوات. إذا كان ذلك ينطبق، سيتم حذف أي بيانات شخصية أخرى في غضون 6 سنوات بعد انتهاء العلاقة التعاقدية ذات الصلة بينك وبيننا، إذا كان ذلك ينطبق). 
<br /> <br />
عندما لم تعد البيانات الشخصية مطلوبة، أو في أي حال، بعد انتهاء الصلاحية القانونية للاحتفاظ بها، سيتم تدمير البيانات الشخصية، وفقًا للقانون المحلي ووفقًا للإجراءات المعمول بها فيما يتعلق بالنظام أو العملية ذات الصلة.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1 mt-6">10. الأطفال</h3>
        <p>لا نعتزم أن يتم استخدام مواقعنا الإلكترونية أو خدماتنا عبر الإنترنت من قبل أي شخص يقل عمره عن 13 عامًا، ومع ذلك، لا يمكننا منع بعض المستخدمين، بما في ذلك الأطفال، من تقديم معلومات عمرية زائفة للوصول إلى الموقع أو التطبيق. إذا كنت والدًا أو وصيًا وتعتقد أننا قد نكون جمعنا معلومات عن طفلك، يرجى الاتصال بنا على الفور كما هو موضح في قسم "اتصل بنا" من هذا البيان.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1 mt-6">11. التحويلات الدولية</h3>
        <p>قد يتم نقل بياناتك الشخصية إلى، وتخزينها، ومعالجتها في بلد غير البلد الذي تم جمعها فيه. قد تتم معالجتها أيضًا من قبل موظفينا العاملين في الكويت، الإمارات العربية المتحدة، الهند، وبولندا لدعم مشاركتك المستمرة مع العلامات التجارية التي تحبها، أو من قبل مزودي الخدمات الخارجيين لدينا. في مثل هذه الحالات، سنتخذ الخطوات المناسبة لضمان مستوى كافٍ من حماية البيانات للمتلقي كما هو مطلوب بموجب لوائح حماية البيانات المقابلة. يمكنك الحصول على مزيد من التفاصيل عن طريق الاتصال بنا كما هو موضح في قسم "اتصل بنا" من هذا البيان.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1 mt-6">12. اتصل بنا</h3>
        <p>نرحب بأسئلتك، تعليقاتك، أو اقتراحاتك حول تطبيقنا. يمكن الاتصال بفريق خدمة عملاء RewardClub عبر الإنترنت على https://www.RewardClub-mena.com/en/contact أو support@RewardClub-mena.com</p>
      </div>
    </div>

) : (
    <div className="max-w-4xl mx-auto p-6 mt-20 text-gray-800">
      <h1 className="text-3xl font-bold text-Green">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mt-1">Version 1.0 Last updated on <span className="text-Green">29/06/2024</span></p>
      
      <p className="mt-4">
        RewardClub is committed to respecting the privacy of everyone using our websites and mobile applications
        ("the Web Sites/Apps") and the protection of any personally identifiable information which we may
        collect on our Websites/Apps and/or use as part of our data collection process.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Applicability and Scope</h2>
      <p className="mt-2">
        This Privacy Statement ("Statement") applies to the RewardClub mobile applications available at
        <a href="https://www.RewardClub-mena.com" className="text-blue-600"> www.RewardClub-mena.com</a>. It also applies to the personal information we process
        when you visit one of our stores in Qatar, Kuwait, UAE, or Saudi Arabia while using our Apps.
      </p>

      <ul className="list-disc pl-6 mt-4">
        <li>Promote and increase RewardClub retail business lines.</li>
        <li>Support continuing engagement to incentivize customers.</li>
        <li>Expand the customer database for personalized marketing activities.</li>
        <li>Continuous offers and rewards from participating brands.</li>
        <li>Participating in prize draws.</li>
      </ul>

      <p className="mt-4 ">
        RewardClub , head office at Burj RewardClub, Al Soor Street, Al Mirqab,
        P.O. Box 181, Safat 13002, Kuwait. Contact us at
        <a href="https://RewardClub-mena.com/contact" className="text-blue-600"> RewardClub-mena.com/contact</a>
        or email <a href="mailto:dpo@RewardClub.com" className="text-blue-600">dpo@RewardClub.com</a>.
      </p>
      
      <h2 className="text-xl font-semibold mb-1 mt-6">2. Updates to this Privacy Statement</h2>
      <p className="mt-2">
        This Statement was effective on the 'Last Revised' date noted near the top of this page. This Statement may
        be updated from time to time. Please check the ‘Last Revised’ date when accessing the Website and Application.
      </p>

      <h2 className="text-xl font-semibold mb-1 mt-6">3. How We Process your Personal Data</h2>
      <p className="mt-2">
        We will only use your Personal Data when the law allows us to. Most commonly, we will use your Personal Data under the following circumstances:
      </p>



<div>
  <h2 className="text-xl mb-1 font-bold">Consent</h2>
  <div>
    <p>When you give us your consent, for example, to access your contacts on your phone or allow us to have access to your location. You have the right to withdraw your consent at any time. To withdraw your consent just go to the Privacy Settings in our Android or iOS Mobile app or contact us at <a href="mailto:support@RewardClub-mena.com" className="text-blue-500">support@RewardClub-mena.com</a>.</p>
  </div>

  <h2 className="text-xl font-bold mb-1 mt-4">Contract</h2>
  <div>
    <p>When we need to execute a contract, you have entered with us by accepting applicable RewardClub terms and conditions. Where we need to collect Personal Data under the terms of a contract we have with you, and you fail to provide that data when requested, we may not be able to perform our services under the contract we have or are trying to enter with you (for example, to provide you with any of our services). In this case, we may have to cancel a service you have with us, but we will notify you if this is the case at the time.</p>
  </div>

  <h2 className="text-xl font-bold mb-1 mt-4">Legal or Regulatory Obligation</h2>
  <div>
    <p>When we need to collect Personal Data by law. If you fail to provide that data when requested, we will not be able to perform our services under the contract with you (for example, to provide you with any of our products or services). In this case, we will have to cancel a product or service you have with us, and we will notify you at that time.</p>
  </div>

  <h2 className="text-xl font-bold mb-1 mt-4">Email Communications, Push Notifications, and In-App Messages</h2>
  <div>
    <p>The Application allows all users to set preferences for receiving promotional email communications from RewardClub, receiving push notifications on your device, and receiving inbox messages. Please note as well that you may opt out of receiving email communications at any time by adjusting your RewardClub online account settings by going to “My Account”  “Settings”  “Communication Preferences”, or by clicking the “unsubscribe” link included within any commercial email we send you.</p>
    <p>Please note once you unsubscribe completely from our marketing communications, your preferences may take up to 48 hours to refresh the latest update. We may be unable to notify you of tailored offers to meet your needs however you will still receive operational and service messages from us regarding your RewardClub Account.</p>
  </div>

  <h2 className="text-xl font-bold mb-1 mt-4">6. Automated Decisions - including Profiling - and Fraud Processing</h2>
  <div>
    <p>RewardClub aims to build a detailed picture of you, including information such as individual motivations, what you value in a brand, what kind of communication you prefer. Segmentation will be managed by us based on your profile data, transaction history and loyalty program behavior recorded in our database.</p>
    <p>RewardClub will be constantly monitoring incoming transactions and member activity to identify potential fraudulent behavior by automated means. The investigation of suspected fraudulent activities as well as continuous monitoring of fraud-related reports will be carried out by our employees. We will block any flagged as suspicious resulting event of a suspected fraudulent behavior once reviewed and confirmed by our Customer Service Agent. For more information, carefully read our RewardClub Terms of Use.</p>
  </div>
</div>
<div>
    <h3 className="text-xl font-semibold mb-1 mt-6">7. Your Data Protection Choices and Rights</h3>
    <p>Withdraw your Consent at any time where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. You have control over your promotional communications preferences, mobile application functionality, cookie settings, and interest-based advertising preferences by going to “My Account”  “Settings” or alternatively contacting us at https://RewardClub-mena.com/contact-us or support@RewardClub-mena.com</p><br />
    <br />
    <p>Request Access to your Personal Data (commonly known as a "data access request"). This enables you to receive a copy of the Personal Data we hold about you in a structured, commonly used, machine-readable format, and to check that we are lawfully processing it.</p><br />
    <br />
    <p>Request Object to processing if such processing is not necessary to achieve the purposes for which your Personal Data have been collected or where such collected Personal Data are beyond the extent required, discriminatory, unfair, or illegal.</p><br />
    <br />
    <p>Request Erasure of your personal data. This enables you to ask us to delete or remove Personal Data upon cessation of the purpose for which the processing has been conducted, or where all justifications for maintaining such Personal Data by us cease to exist.</p><br />
    <br />
    <p>Request Correction of the Personal Data that we hold about you that shall be accompanied with proof of the accuracy of such request. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.</p><br />
    <br />
    <p>Request Correction of the Personal Data that we hold about you that shall be accompanied with proof of the accuracy of such request. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.</p>
    <br />
</div>
<div>
    <h3 className="text-xl font-semibold mb-1 mt-6">8. How We Protect Your Personal Data</h3>
    <p>We protect your information using technical, physical, and administrative security measures to reduce the risk of loss, misuse, unauthorised access, disclosure, or modification of your information. When you transmit highly sensitive information (such as a credit card number) through our website or in one of our mobile applications, we encrypt the transmission of that information using the Secure Sockets Layer (SSL) protocol. You are responsible for protecting your password(s) and maintaining the security of your devices. </p>
</div>
<div>
    <h3 className="text-xl font-semibold mb-1 mt-6">9. Retention and Disposal of Your Personal</h3>
    <p>We store Personal Data as needed to accomplish the purposes identified in this Statement and to meet legal requirements, including record retention, resolving disputes, and enforcing our agreements. Our retention of your Personal Data is governed by applicable law. This storage period may extend beyond the term of your relationship with us. </p><br />
    <br />
    <p>As a general rule, we keep your Personal Data for only as long as it is needed to complete the purpose for which it was collected or as required by law. We may need to keep your Personal Data for longer than our specified retention periods to honor your requests or to comply with legal, regulatory, accounting, or other obligations. E.g., Personal Data contained in contracts, communications, and business letters may be subject to statutory retention requirements, which may require retention of up to 10 years. If applicable, any other Personal Data will in principle be deleted 6 years after the termination of the respective related contractual relationship between you and us, if applicable). 
<br /> <br />
When Personal Data is no longer needed, or in any event, after legal authority to retain it has expired, Personal Data will be destroyed, in accordance with local law and pursuant to procedures established in relation to the relevant system or process. </p>
</div>
<div>
    <h3 className="text-xl font-semibold mb-1 mt-6">10. Children</h3>
    <p>We do not intend for our websites or online services to be used by anyone under the age of 13, however, we cannot prevent certain users, including children, from fraudulently representing their age in order to gain access to the Site or an App. If you are a parent or guardian and believe we may have collected information about your child, please contact us immediately as described in the “Contact Us" section of this Statement.</p>
</div>
<div>
    <h3 className="text-xl font-semibold mb-1 mt-6">11. International Transfers</h3>
    <p>Your Personal Data may be transferred to, stored, and processed in a country other than the one in which it was collected. It may also be processed by our staff operating in Kuwait, UAE, India and Poland to support your continuing engagement with our brands you love, or for our third-party service providers. In such cases, we will take appropriate steps to ensure an adequate level of data protection of the recipient as required under the correspondent data protection regulation. You may obtain further details by contacting us as described in the “Contact Us" section of this Statement.</p>

</div>
<div>
    <h3 className="text-xl font-semibold mb-1 mt-6">12. Contact Us</h3>
    <p>We welcome your questions, comments or suggestions about our application RewardClub Customer Care can be contacted online at https://www.RewardClub-mena.com/en/contact or support@RewardClub-mena.com</p>
</div>



    </div>
       )}
    </div>
  );
};

export default PrivacyPolicy;
