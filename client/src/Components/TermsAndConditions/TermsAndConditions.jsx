import React from "react";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white mt-20 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">{t('termsAndConditions.title')}</h1>
      <p className="text-sm text-gray-500">{t('termsAndConditions.version')}</p>
      <h2 className="text-xl font-semibold mt-4">{t('termsAndConditions.rewardClub')}</h2>

      <div className="mt-4 space-y-4 text-gray-700">
        <div>
          <h3 className="font-semibold">{t('termsAndConditions.generalTerms')}</h3>
          <p>{t('termsAndConditions.generalTermsDescription')}</p>
          <ul className="list-disc ml-6">
            <li>{t('termsAndConditions.rewardClubDescription')}</li>
            <li>{t('termsAndConditions.amendmentTerms')}</li>
            <li>{t('termsAndConditions.lawsDescription')}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">{t('termsAndConditions.privacyDataProtection')}</h3>
          <p>{t('termsAndConditions.privacyDescription')}</p>
          <p>{t('termsAndConditions.privacyPolicyLink')}</p>
        </div>

        <div>
          <h3 className="font-semibold">{t('termsAndConditions.membershipEligibility')}</h3>
          <ul className="list-disc ml-6">
            <li>{t('termsAndConditions.eligibilityCondition1')}</li>
            <li>{t('termsAndConditions.eligibilityCondition2')}</li>
            <li>{t('termsAndConditions.eligibilityCondition3')}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">{t('termsAndConditions.accountResponsibility')}</h3>
          <ul className="list-disc ml-6">
            <li>{t('termsAndConditions.accountResponsibility1')}</li>
            <li>{t('termsAndConditions.accountResponsibility2')}</li>
            <li>{t('termsAndConditions.accountResponsibility3')}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">{t('termsAndConditions.earningRedeemingPoints')}</h3>
          <ul className="list-disc ml-6">
            <li>{t('termsAndConditions.earningPoints')}</li>
            <li>{t('termsAndConditions.redeemingPoints')}</li>
            <li>{t('termsAndConditions.retroactiveClaims')}</li>
          </ul>
        </div>
          
        <div>
      <div>
        <h3 className="font-semibold">{t('retroactive_claims.title')}</h3>
        <ul className="list-disc ml-6">
          <li>{t('retroactive_claims.points.0')}</li>
          <li>{t('retroactive_claims.points.1')}</li>
          <li>{t('retroactive_claims.points.2')}</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">{t('points_accrual.title')}</h3>
        <ul className="list-disc ml-6">
          <li>{t('points_accrual.points.0')}</li>
          <li>{t('points_accrual.points.1')}</li>
          <li>{t('points_accrual.points.2')}</li>
          <li>{t('points_accrual.points.3')}</li>
          <li>{t('points_accrual.points.4')}</li>
          <li>{t('points_accrual.points.5')}</li>
          <p className="mt-2">{t('points_accrual.details')}</p>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">{t('points_visible.title')}</h3>
        <ul className="list-disc ml-6">
          <p className="mt-2">{t('points_visible.details')}</p>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">{t('point_expiry.title')}</h3>
        <ul className="list-disc ml-6">
          <li>{t('point_expiry.points.0')}</li>
          <li>{t('point_expiry.points.1')}</li>
          <li>{t('point_expiry.points.2')}</li>
          <li>{t('point_expiry.points.3')}</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">{t('tier_rules.title')}</h3>
        <h4 className="mb-2 mt-2">{t('tier_rules.subtitle')}</h4>
        <ul className="list-disc ml-6">
          <li>{t('tier_rules.points.0')}</li>
          <li>{t('tier_rules.points.1')}</li>
          <li>{t('tier_rules.points.2')}</li>
          <li>{t('tier_rules.points.3')}</li>
          <li>{t('tier_rules.points.4')}</li>
          <li>{t('tier_rules.points.5')}</li>
          <li>{t('tier_rules.points.6')}</li>
        </ul>
      </div>
    </div>
    <div>
        <h3 className="font-semibold mb-2">{t('credits_account_creation')}</h3>
        <ul className="list-disc ml-6">
          <li>{t('credits_use_1')}</li>
          <li>{t('credits_use_2')}</li>
          <li>{t('credits_use_3')}</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('use_of_credits_facility')}</h3>
        <ul className="list-disc ml-6">
          <li>{t('credits_use_4')}</li>
          <li>{t('credits_use_5')}</li>
          <li>{t('credits_use_6')}</li>
          <li>{t('credits_use_7')}</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('friends_and_family_accounts')}</h3>
        <p className="mt-2 mb-2">{t('friends_and_family_description')}</p>
        <strong className="mt-2 mb-2">{t('general_friends_and_family_rules')}</strong>
        <ul className="list-disc ml-6">
          <li>{t('friends_and_family_rule_1')}</li>
          <li>{t('friends_and_family_rule_2')}</li>
          <li>{t('friends_and_family_rule_3')}</li>
          <li>{t('friends_and_family_rule_4')}</li>
          <li>{t('friends_and_family_rule_5')}</li>
          <li>{t('friends_and_family_rule_6')}</li>
          <li>{t('friends_and_family_rule_7')}</li>
          <li>{t('friends_and_family_rule_8')}</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('child_enrolment')}</h3>
        <ul className="list-disc ml-6">
          <li>{t('child_enrolment_1')}</li>
          <li>{t('child_enrolment_2')}</li>
          <li>{t('child_enrolment_3')}</li>
          <li>{t('child_enrolment_4')}</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('co_brand_card_partnership')}</h3>
        <ul className="list-disc ml-6">
          <li>{t('co_brand_card_1')}</li>
          <li>{t('co_brand_card_2')}</li>
          <li>{t('co_brand_card_3')}</li>
          <li>{t('co_brand_card_4')}</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('employees')}</h3>
        <ul className="list-disc ml-6">
          <li>{t('employees_1')}</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('digital_card_restriction')}</h3>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('benefits_restriction')}</h3>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('rewardclub_rights')}</h3>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('personal_data_privacy')}</h3>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('discrepancy_in_text')}</h3>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('jurisdiction')}</h3>
        <p>{t('jurisdiction_text_1')}</p>
        <br />
        <p>{t('jurisdiction_text_2')}</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">{t('communication_preferences.title')}</h3>
        <li>{t('communication_preferences.item_1')}</li>
        <br />
        <li>{t('communication_preferences.item_2')}</li>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('disclaimer.title')}</h3>
        <ul>
          <li>{t('disclaimer.item_1')}</li>
          <li>{t('disclaimer.item_2')}</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{t('enquiries.title')}</h3>
        <p>{t('enquiries.text')}</p>
      </div>
        </div>
      </div>
    );
  };
  
  export default TermsAndConditions;
  