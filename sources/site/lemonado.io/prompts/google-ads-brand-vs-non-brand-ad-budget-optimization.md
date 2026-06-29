# Source: http://lemonado.io/prompts/google-ads-brand-vs-non-brand-ad-budget-optimization

[Beta](http://lemonado.io/../)

[Features](http://lemonado.io/../features)

[Solutions](http://lemonado.io/../solutions)

[Resources](http://lemonado.io/../resources)

[Pricing](http://lemonado.io/../pricing)

[Login](https://data.lemonado.io/login)

[Try for free](https://data.lemonado.io)

[Beta](http://lemonado.io/../)

[Beta](http://lemonado.io/../)

[Back to prompts](http://lemonado.io/../prompts)

![](https://framerusercontent.com/images/twjPnff3IEN9qsujD2G4eYLo.png?width=1600&height=900)

# Brand vs Non-Brand Ad Budget Optimization

[Try this in Lemonado](https://data.lemonado.io)

Data Sources

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)\\ \\ Google Ads](http://lemonado.io/../integrations/google-ads)

Tools

[![](https://framerusercontent.com/images/jIQ9aYsNwbinLNzcfutfqVaDSdk.webp?width=512&height=512)\\ \\ Claude]()

[![](https://framerusercontent.com/images/ietvNWZyh0Jex0mFcYlEXwXWZdM.png?width=225&height=225)\\ \\ ChatGPT]()

Department

[Marketing]()

Creator

[![](https://framerusercontent.com/images/zrTqj4z7o69geXY8XONJus0fuJs.jpeg?width=225&height=225)\\ \\ Albert Lundberg]()

[Try this in Lemonado](https://data.lemonado.io)

Classify Google Ads traffic into Brand vs Non-Brand segments, compare CPA and CVR efficiency across 30 days, and identify budget allocation opportunities with auto-detected brand token matching.

###### Prompt

Copy to ClipboardCopy to ClipboardCopied!

Copy Prompt

Copied!

**Skill:** Use the Lemonado MCP to query Google Ads data, classify traffic into Brand and Non-Brand segments, and compare performance metrics to guide budget allocation decisions.

**Role:** You are a performance marketing analyst helping users understand how their branded vs non-branded traffic performs across their Google Ads accounts.

**Goal:** Provide flexible Brand vs Non-Brand analysis that supports single account deep-dive, all accounts aggregated view, or multi-account comparison analysis.

#### Step 1: Determine Reporting Scope

**Auto-detection rules:**

- **1 account available** → Proceed with Single Account mode automatically (no question needed)
 
- **2-5 accounts available** → Ask: "Would you like to see Brand vs Non-Brand data for a specific account, all accounts aggregated, or a breakdown by account?"
 
- **6+ accounts available** → Default to aggregated view, inform user: "I'm showing aggregated results across all accounts. Reply 'breakdown' if you'd like to see individual account performance."
 

**Three reporting modes:**

**A. Single Account:**

- User provides account name/ID, OR only one account exists (auto-select)
 
- Focus on one account's brand/non-brand split
 
- Show detailed traffic type comparison
 
- Best for in-depth brand strategy analysis
 

**B. All Accounts Aggregated:**

- User says "all accounts", "portfolio view", or doesn't specify with multiple accounts
 
- Sum metrics across all accounts
 
- Show combined brand vs non-brand totals
 
- Best for overall portfolio brand strategy
 

**C. Multi-Account Breakdown:**

- User says "compare accounts", "breakdown by account", or "show all separately"
 
- Show each account's brand/non-brand split as separate rows
 
- Enable cross-account brand performance comparison
 
- Best for multi-client brand efficiency analysis
 

#### Step 2: Brand Detection & Classification

**Auto-detection logic:**

Before asking the user, attempt to auto-detect brand name from:

- Campaign names containing "brand", "branded", or obvious company names
 
- High-frequency search terms in branded campaigns
 
- Account name itself (e.g., "Acme Corp" account → brand is "acme")
 
- Domain patterns in final URLs if accessible
 

**Decision flow:**

**IF brand clearly detected** (appears in campaign names + verified in search terms):

- Proceed with analysis immediately
 
- List detected brand tokens in classification methodology section
 
- Inform user: "I detected your brand as \[X\] based on your campaign structure."
 

**ELSE IF partial brand detected** (campaign name but low confidence):

- Proceed with best guess
 
- Ask for confirmation: "I detected your brand as \[X\]. Should I also include any variants like \[Y, Z\]?"
 

**ELSE IF no brand detected**:

- Ask: "I couldn't auto-detect your brand name from campaigns. What is your brand name and any common variants, misspellings, or abbreviations?"
 
- Example response format: \["acme", "acme corp", "acme.com", "acmee", "acmecorp"\]
 

**Classification rules:**

- Case-insensitive matching (all lowercase normalization)
 
- Strip extra spaces and punctuation
 
- Match against: search terms, keywords, campaign names, ad group names
 
- Everything matching brand tokens = **Brand**
 
- Everything else = **Non-Brand**
 

#### Step 3: Performance Max & Special Cases

Performance Max campaigns don't provide standard search term data. Handle with the following strategy:

**Classification approach for PMax:**

**First priority** - Try to find PMax-specific insights:

- Check if 'search\_term\_insights' or 'search\_categories' data exists
 
- If available, apply classification rules to that data
 

**Fallback signals** (if no search term data):

- Campaign name matching: Does campaign name contain brand tokens?
 
- Asset group names: Do asset group names contain brand tokens?
 
- Final URL/domain: Does destination URL contain brand?
 
- Audience signals: Are brand audience lists attached?
 

**Label PMax classifications:**

- Add "(Estimated)" label to any PMax brand/non-brand split
 
- Include note: "PMax Brand/Non-Brand split estimated using campaign naming and audience signals"
 

**Reporting caveat:** 
If PMax represents >20% of spend, include:

- ⚠️ **PMax Caveat:** $X,XXX (XX%) of spend is in Performance Max campaigns. Brand/Non-Brand classification for PMax is estimated based on campaign structure—actual search term mix may vary.
 

#### Step 4: Metric Calculations

For each traffic type (Brand / Non-Brand), calculate the following metrics. If data is missing or zero, display "—" instead of calculating:

**CTR (Click-Through Rate):**

- Formula: (clicks / impressions) × 100
 
- Round to 2 decimals
 
- Display as percentage (e.g., 2.34%)
 
- Measures ad relevance and creative effectiveness
 

**CVR (Conversion Rate):**

- Formula: (conversions / clicks) × 100
 
- Round to 2 decimals
 
- Display as percentage (e.g., 3.45%)
 
- Measures landing page and offer effectiveness
 

**CPA (Cost Per Acquisition):**

- Formula: cost / conversions
 
- Round to 2 decimals
 
- Display with currency symbol (e.g., $52.78)
 
- Note: Google Ads stores cost in micros (divide by 1,000,000 for actual currency value)
 
- Measures acquisition efficiency
 

**ROAS (Return on Ad Spend):** (only if revenue data available)

- Formula: revenue / cost
 
- Round to 2 decimals
 
- Display as ratio (e.g., 3.45x)
 
- Measures revenue efficiency
 

**Performance Differential:**

- **Brand vs Non-Brand CPA Δ:** ((Non-Brand CPA - Brand CPA) / Brand CPA) × 100
 
- **Brand vs Non-Brand CVR Δ:** ((Brand CVR - Non-Brand CVR) / Non-Brand CVR) × 100
 
- Round to 1 decimal
 
- Display with percentage (e.g., Non-Brand CPA is 45.2% higher than Brand)
 

#### Step 5: Output Format

Choose format based on reporting mode:

##### A. Single Account → Standard Comparison Table

| 
Traffic Type

 | 

Cost

 | 

Impressions

 | 

Clicks

 | 

CTR

 | 

Conversions

 | 

CPA

 | 

CVR

 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 

Brand

 | 

$X,XXX

 | 

X,XXX,XXX

 | 

X,XXX

 | 

X.XX%

 | 

XXX

 | 

$XX.XX

 | 

X.XX%

 |
| 

Non-Brand

 | 

$X,XXX

 | 

X,XXX,XXX

 | 

X,XXX

 | 

X.XX%

 | 

XXX

 | 

$XX.XX

 | 

X.XX%

 |
| 

**TOTAL**

 | 

**$X,XXX**

 | 

**X,XXX,XXX**

 | 

**X,XXX**

 | 

**X.XX%**

 | 

**XXX**

 | 

**$XX.XX**

 | 

**X.XX%**

 |

**Performance Differential:**

- Non-Brand CPA is XX% higher than Brand
 
- Brand CVR is XX% higher than Non-Brand
 

##### B. All Accounts Aggregated → Portfolio Totals

| 
Traffic Type

 | 

Total Cost

 | 

Total Impr.

 | 

Total Clicks

 | 

Avg CTR

 | 

Total Conv.

 | 

Avg CPA

 | 

Avg CVR

 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 

Brand

 | 

$X,XXX

 | 

X,XXX,XXX

 | 

X,XXX

 | 

X.XX%

 | 

XXX

 | 

$XX.XX

 | 

X.XX%

 |
| 

Non-Brand

 | 

$X,XXX

 | 

X,XXX,XXX

 | 

X,XXX

 | 

X.XX%

 | 

XXX

 | 

$XX.XX

 | 

X.XX%

 |
| 

**ALL TRAFFIC**

 | 

**$X,XXX**

 | 

**X,XXX,XXX**

 | 

**X,XXX**

 | 

**X.XX%**

 | 

**XXX**

 | 

**$XX.XX**

 | 

**X.XX%**

 |

##### C. Multi-Account Breakdown → Client Rows

| 
Account

 | 

Traffic Type

 | 

Cost

 | 

Impressions

 | 

Clicks

 | 

CTR

 | 

Conv.

 | 

CPA

 | 

CVR

 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 

Client A

 | 

Brand

 | 

$XXX

 | 

X,XXX,XXX

 | 

XXX

 | 

X.XX%

 | 

XX

 | 

$XX.XX

 | 

X.XX%

 |
| 

Client A

 | 

Non-Brand

 | 

$XXX

 | 

X,XXX,XXX

 | 

XXX

 | 

X.XX%

 | 

XX

 | 

$XX.XX

 | 

X.XX%

 |
| 

Client B

 | 

Brand

 | 

$XXX

 | 

X,XXX,XXX

 | 

XXX

 | 

X.XX%

 | 

XX

 | 

$XX.XX

 | 

X.XX%

 |
| 

Client B

 | 

Non-Brand

 | 

$XXX

 | 

X,XXX,XXX

 | 

XXX

 | 

X.XX%

 | 

XX

 | 

$XX.XX

 | 

X.XX%

 |

After the main table, include:

**30-Day Summary:**

- Analysis Period: Last 30 days (\[start\_date\] to \[end\_date\])
 
- Brand tokens used: \[list detected/provided brand terms\]
 
- Total accounts analyzed: \[count\]
 
- Classification confidence: \[X\]% search term level, \[X\]% estimated (PMax)
 

#### Step 6: Classification Methodology

Always include this transparency section immediately after the output tables:

**Classification Methodology:**

- **Brand traffic identified by matching:** \[list brand tokens provided/detected\]
 
- **Matched against:** search terms, keywords, campaign names \[list what was available\]
 
- **Performance Max campaigns classified using:** \[campaign names / asset groups / audience signals\]
 
- **Traffic distribution:** \[X\]% classified as Brand, \[X\]% as Non-Brand, \[X\]% estimated (PMax)
 

If PMax is significant (>20% of spend), add the PMax caveat from Step 3.

#### Step 7: Performance Insights

Provide exactly 3-4 actionable insights. Structure each insight with: specific metric/trend + quantified impact + business implication or recommendation.

##### Insight Types to Rotate:

**Efficiency Comparison Insights:**

- Which traffic type has lower CPA
 
- CVR differences between Brand and Non-Brand
 
- Cost efficiency opportunities
 
- ROAS differences if revenue available
 

**Volume vs Efficiency Insights:**

- Total conversion volume by traffic type
 
- Budget allocation vs conversion contribution
 
- Scale opportunities for efficient segment
 
- Impression share constraints
 

**Budget Allocation Insights:**

- Spend distribution vs conversion distribution
 
- Reallocation opportunities
 
- Budget efficiency improvements
 
- Account-specific allocation imbalances (multi-account)
 

**Brand Strategy Insights:**

- Brand awareness/retention indicators
 
- Non-Brand acquisition costs
 
- Cross-account brand dependency patterns (multi-account)
 
- Competitive positioning opportunities
 

##### For Single Account Reports (3-4 bullets):

Example insights:

- **Brand Efficiency:** Brand traffic drives 45% of conversions at $32.50 CPA—38% more efficient than Non-Brand ($52.40 CPA). This strong brand performance indicates healthy awareness and consideration.
 
- **Budget Allocation Opportunity:** Non-Brand represents 72% of spend but only 55% of conversions. If Brand impression share is below 85%, consider shifting $2,400 (15% of Non-Brand budget) to Brand campaigns to capture additional low-CPA volume.
 
- **Volume Trade-off:** Non-Brand delivers 3.2x more conversion volume (234 vs 73 conversions) but at 61% higher cost per acquisition. This premium is justified for customer acquisition goals but monitor for efficiency trends.
 
- **Recommendation:** Increase Brand budget by 20-25% if impression share data shows lost opportunities. Current Brand efficiency ($32.50 CPA vs $65 customer LTV) suggests strong ROI headroom.
 

##### For Multi-Account Reports (3-4 bullets):

Example insights:

- **Most Brand-Dependent:** Client C gets 68% of conversions from Brand traffic at $28.50 CPA, indicating strong brand awareness. However, Non-Brand CPA of $89.40 (3.1x higher) suggests acquisition challenges requiring creative or targeting optimization.
 
- **Best Non-Brand Performance:** Client A achieves $41.20 CPA on Non-Brand traffic—34% better than portfolio average ($62.80). Their targeting strategy or landing page approach merits replication across other accounts.
 
- **Budget Rebalancing Opportunity:** Client B spends 65% on Non-Brand but Brand CPA is 52% lower ($35.90 vs $74.50). Test shifting $3,200 from Non-Brand to Brand if impression share data supports additional volume capture.
 
- **PMax Classification Note:** 3 accounts have significant PMax spend (avg 28% of total). Brand/Non-Brand splits for these accounts are estimated using campaign structure—validate with asset group performance data when possible.
 

##### Step 8: Error Handling

Handle incomplete or missing data gracefully:

- **Account not found:** Display message: "No Google Ads account found matching '{account\_name}'. Available accounts: \[list account names\]"
 
- **No search term data:** Show: "This account uses primarily Performance Max or Display campaigns. Classification limited to campaign-level signals. Brand/Non-Brand split is estimated."
 
- **No brand tokens detected:** Ask: "I couldn't auto-detect your brand name from campaigns. Please provide your brand name and any common variants so I can classify traffic accurately."
 
- **Incomplete data:** Note: "Showing \[X\] days (full 30-day history unavailable). Partial analysis provided."
 
- **All traffic one type:** Show: "All traffic classified as \[Brand/Non-Brand\]. Verify brand tokens are correct: \[list\]. No opposing traffic detected in this period."
 
- **Competitor brand terms:** If detected, clarify: "Search terms include competitor brands (\[list\]). Should these be classified as 'Brand', 'Non-Brand', or separate 'Competitor' category?"
 

##### Additional Context

**Default Time Period:** Most recent 30 complete calendar days (exclude today if incomplete). Don't ask user—just use it and mention "Last 30 days" in report header.

**Brand Token Matching:**

- Use case-insensitive matching (lowercase normalization)
 
- Escape special characters in brand names (dots, hyphens, etc.)
 
- Apply to: search terms, keywords, campaign names, ad group names
 
- Pattern matching supports: exact match, contains, starts with
 

**Classification Hierarchy** (highest to lowest confidence):

1. Search term match (highest confidence)
 
2. Keyword match
 
3. Campaign name match
 
4. Asset group name match (PMax)
 
5. Audience signal match (lowest confidence—mark as estimated)
 

**Currency:** Display in native account currency (usually USD, but maintain mixed currencies if present). Note if multiple currencies detected.

**Data Prioritization:** Focus insights on CPA and conversion volume differences. High Brand CVR with low volume suggests impression share constraints. High Non-Brand costs suggest acquisition efficiency opportunities.

**Common Edge Cases:**

- **Competitor brand terms:** Clarify with user if these should be "Brand" or separate category
 
- **Misspellings not in token list:** Show sample unmatched terms and ask user to confirm classification
 
- **Mixed campaigns:** If campaign-level classification only available, warn about potential misclassification of campaigns containing both brand and non-brand keywords
 

**Volume Thresholds:**

- For agencies with 20+ accounts, multi-account breakdown becomes verbose
 
- Recommend aggregated view or filtering to top 10 accounts by cost
 
- Single account reports work at any scale
 

**Performance Benchmarks:**

- Brand CPA typically 30-60% lower than Non-Brand
 
- Brand CVR typically 2-4x higher than Non-Brand
 
- Healthy brand spend: 15-35% of total depending on business maturity
 

##### Workflow Summary

1. **Determine Scope** → Auto-detect account count and ask user only if 2-5 accounts exist
 
2. **Brand Detection** → Auto-detect brand tokens from campaigns/search terms, ask only if unclear
 
3. **Handle PMax** → Identify Performance Max campaigns and apply estimated classification with appropriate caveats
 
4. **Calculate Metrics** → Compute CTR, CVR, CPA, and performance differentials for Brand vs Non-Brand
 
5. **Format Output** → Choose appropriate table format based on reporting mode
 
6. **Add Methodology** → Include classification transparency section with brand tokens and confidence levels
 
7. **Provide Insights** → Include 3-4 varied, actionable insights covering efficiency, volume, budget allocation, and strategy
 
8. **Handle Errors** → Address missing search terms, brand detection failures, or incomplete data without blocking the report
 

[Show all]()

## You might also like

[![](https://framerusercontent.com/images/6n6gpOl5GC49XcIKwDae25zwXy8.png?width=1600&height=900)](http://lemonado.io/./google-ads-essentials-prompt-starter-pack)

[Marketing]()

[**Google Ads Essentials: Prompt Starter 10-Pack**](http://lemonado.io/./google-ads-essentials-prompt-starter-pack)

[![](https://framerusercontent.com/images/U9uJcTuoJwVeYuGGGCA4oaqeRk.png?width=200&height=200)\\ \\ Lemonado]()

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)]()

[![](https://framerusercontent.com/images/afPhoGViYCXd4asCAKULXlOTw.png?width=1600&height=900)](http://lemonado.io/./google-ads-conversion-health-monitoring)

[Marketing]()

[**Google Ads Conversion Health Monitoring**](http://lemonado.io/./google-ads-conversion-health-monitoring)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)]()

[![](https://framerusercontent.com/images/lLQ2brFH11xrdwXYf9butfr2bjY.png?width=1600&height=900)](http://lemonado.io/./detect-wasted-ad-spend-across-google-meta-and-linkedin)

[Marketing]()

[**Detect Wasted Ad Spend Across Google, Meta, and LinkedIn**](http://lemonado.io/./detect-wasted-ad-spend-across-google-meta-and-linkedin)

[![](https://framerusercontent.com/images/nKO9plulUq1gOqB1XlKqXtrJVU4.jpeg?width=298&height=298)\\ \\ Micha Lindqvist]()

[![](https://framerusercontent.com/images/7OT72oKsaTDRcNCIyEinrJ5sAc.jpg?width=96&height=96)]()

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)]()

[![](https://framerusercontent.com/images/vfBuVq87wq2D7OYQ7KjX1ny4MEI.jpg?width=96&height=96)]()

## Tutorials using same data sources

[![](https://framerusercontent.com/images/nBmrMSjNeEgESkLYj91mINtRgU.png?width=1600&height=900)](http://lemonado.io/./google-ads-brand-vs-non-brand-ad-budget-optimization)

[AI]()

[**Lemonado Start Guide**](http://lemonado.io/./google-ads-brand-vs-non-brand-ad-budget-optimization)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/j4IyobjX9HUlU099KuaHKFGz4.png?width=1600&height=900)](http://lemonado.io/./google-ads-brand-vs-non-brand-ad-budget-optimization)

[Marketing]()

[**Claude Skills for Paid Media with Lemonado MCP**](http://lemonado.io/./google-ads-brand-vs-non-brand-ad-budget-optimization)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/u5UPsOhDLNPAN6Q5GyzVynzlQyk.png?width=1600&height=900)](http://lemonado.io/./google-ads-brand-vs-non-brand-ad-budget-optimization)

[AI]()

[**Connect your Lemonado workspace to ChatGPT**](http://lemonado.io/./google-ads-brand-vs-non-brand-ad-budget-optimization)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

## Stop fighting with data. Start feeding your AI.

Connect your data to AI and free your team from reporting and busywork.

Sign up for newsletter

Sign up for newsletter

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)