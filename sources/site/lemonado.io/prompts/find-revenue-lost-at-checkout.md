# Source: http://lemonado.io/prompts/find-revenue-lost-at-checkout

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

![](https://framerusercontent.com/images/Eoh1W3JDGZggYYln3vMNoftoBo.png?width=1600&height=900)

# Find Revenue Lost at Checkout

[Try this in Lemonado](https://data.lemonado.io)

Data Sources

[![](https://framerusercontent.com/images/Jnb6UBh0nMYmlgcJupLh3jDLW38.png?width=630&height=630)\\ \\ Sharetribe](http://lemonado.io/../integrations/sharetribe)

[![](https://framerusercontent.com/images/Dad2FDG3iyjO7IDRYFdB1hRkPQ.png?width=628&height=628)\\ \\ Stripe](http://lemonado.io/../integrations/stripe)

Tools

[![](https://framerusercontent.com/images/ietvNWZyh0Jex0mFcYlEXwXWZdM.png?width=225&height=225)\\ \\ ChatGPT]()

[![](https://framerusercontent.com/images/jIQ9aYsNwbinLNzcfutfqVaDSdk.webp?width=512&height=512)\\ \\ Claude]()

Department

[Marketplaces]()

[Finance]()

Creator

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[Try this in Lemonado](https://data.lemonado.io)

Compare Sharetribe booking attempts with Stripe successful payments to identify where revenue is lost in checkout. Calculate payment success rate, find failed transaction patterns, and see how much revenue you could recover.

###### Prompt

Copy to ClipboardCopy to ClipboardCopied!

Copy Prompt

Copied!

**Skill:** Use the Lemonado MCP to query Sharetribe transaction data and Stripe payment data to identify payment success rates, failed payment patterns, and checkout abandonment issues.

**Role:** You are a marketplace payments analyst helping users identify and reduce revenue loss from failed transactions and payment friction.

**Goal:** Compare Sharetribe booking attempts with Stripe successful payments to calculate payment success rate, identify failed transaction patterns, and quantify revenue loss from checkout abandonment and payment failures.

#### Step 1: Data Requirements Check

**Required integrations:**

- ✅ Sharetribe marketplace must be connected
 
- ✅ Stripe payment processing must be connected
 
- ✅ Both platforms must cover the same time period
 

**Critical requirement:** Both platforms must be connected for this cross-platform analysis.

**Data matching approach:** 
This analysis compares transaction volumes and values across platforms to identify gaps:

- Sharetribe: Transaction/booking attempts (intent to purchase)
 
- Stripe: Successful payment charges (completed purchases)
 
- Gap analysis reveals: Payment failures, checkout abandonment, processing errors
 

#### Step 2: Analysis Configuration

**Default settings** (no user input required):

- **Time period:** Last 30 days (both Sharetribe and Stripe)
 
- **Transaction status focus:** Completed bookings (Sharetribe) vs Successful charges (Stripe)
 
- **Currency:** Primary account currency (usually matches between platforms)
 

If user wants to adjust: "Would you like to change the analysis period (default: 30 days)?"

#### Step 3: Key Metrics

##### From Sharetribe (Transaction Attempts):

**Total Transactions Initiated:**

- Count of all booking/transaction attempts
 
- Includes completed, pending, declined, and canceled
 
- Represents full funnel top
 

**Completed Transactions:**

- Count of transactions marked as "completed" or "accepted"
 
- Should match Stripe successful payments if no issues
 

**Transaction Value (Initiated):**

- Total GMV of all transaction attempts
 
- Represents potential revenue
 

**Transaction Value (Completed):**

- Total GMV of completed transactions only
 
- Should match Stripe charge amounts
 

##### From Stripe (Payment Processing):

**Successful Charges:**

- Count of charges with status = "succeeded"
 
- Represents actual completed payments
 

**Failed Charges:**

- Count of charges with status = "failed"
 
- Payment declined by bank, insufficient funds, card errors
 

**Disputed/Refunded Charges:**

- Count of charges that succeeded but later disputed or refunded
 
- Different from initial failures
 

**Total Charge Amount (Successful):**

- Sum of all successful charge amounts
 
- Represents actual revenue collected
 

**Total Failed Amount:**

- Sum of all failed charge attempts
 
- Represents revenue lost to payment failures
 

##### Calculated Metrics (Cross-Platform):

**Payment Success Rate:**

- Formula: (Stripe Successful Charges / Sharetribe Completed Transactions) × 100
 
- Round to 1 decimal
 
- Display as percentage (e.g., 94.2%)
 
- **Healthy benchmark: >95%**
 

**Transaction Completion Rate:**

- Formula: (Sharetribe Completed Transactions / Sharetribe Total Initiated) × 100
 
- Round to 1 decimal
 
- Shows how many attempts reach completion
 
- **Healthy benchmark: >70%**
 

**End-to-End Success Rate:**

- Formula: (Stripe Successful Charges / Sharetribe Total Initiated) × 100
 
- Round to 1 decimal
 
- Shows full funnel efficiency from attempt to payment
 
- **Healthy benchmark: >65%**
 

**Revenue Loss from Failures:**

- Formula: Total Failed Amount (Stripe)
 
- Display with currency symbol
 
- Quantifies actual revenue lost
 

**Revenue at Risk:**

- Formula: (Sharetribe Completed GMV - Stripe Successful Charge Amount)
 
- Shows gap between expected and actual revenue
 
- May indicate payment processing issues or data sync problems
 

#### Step 4: Failure Pattern Analysis

Identify where revenue is being lost:

**Failure Point 1: Pre-Payment Abandonment**

- Transactions initiated but not completed in Sharetribe
 
- Users abandon before confirming booking
 
- Calculation: Initiated - Completed transactions
 

**Failure Point 2: Payment Processing Failures**

- Sharetribe shows completed, but Stripe shows failed payment
 
- Card declined, insufficient funds, fraud detection
 
- Calculation: Completed transactions - Successful charges
 

**Failure Point 3: Payment Method Issues**

- Specific card types or payment methods failing more often
 
- If Stripe data includes payment method breakdown
 

**Failure Point 4: Amount Mismatches**

- Sharetribe GMV doesn't match Stripe charge amounts
 
- May indicate pricing errors or fee calculation issues
 
- Calculation: Completed GMV - Successful charge amount
 

#### Step 5: Output Format

##### A. Executive Summary

PAYMENT SUCCESS RATE ANALYSIS

Analysis Period: \[start\_date\] to \[end\_date\] (30 days)
Data Sources: Sharetribe + Stripe

TRANSACTION FUNNEL:
Total Booking Attempts (Sharetribe): \[XXX\]
Completed Bookings (Sharetribe): \[XXX\]
Successful Payments (Stripe): \[XXX\]

CONVERSION RATES:
Transaction Completion Rate: \[XX.X\]%
Payment Success Rate: \[XX.X\]%
End-to-End Success Rate: \[XX.X\]

PAYMENT SUCCESS RATE ANALYSIS

Analysis Period: \[start\_date\] to \[end\_date\] (30 days)
Data Sources: Sharetribe + Stripe

TRANSACTION FUNNEL:
Total Booking Attempts (Sharetribe): \[XXX\]
Completed Bookings (Sharetribe): \[XXX\]
Successful Payments (Stripe): \[XXX\]

CONVERSION RATES:
Transaction Completion Rate: \[XX.X\]%
Payment Success Rate: \[XX.X\]%
End-to-End Success Rate: \[XX.X\]

**REVENUE IMPACT:**

- Expected Revenue (Completed Bookings): $\[XX,XXX\]
 
- Actual Revenue (Successful Payments): $\[XX,XXX\]
 
- Revenue Loss from Failures: $\[X,XXX\] (\[X.X\]% of potential)
 

**HEALTH STATUS:** \[Healthy/Warning/Critical\]

##### B. Payment Funnel Breakdown

| 
Stage

 | 

Count

 | 

Value

 | 

Drop-off

 | 

Status

 |
| --- | --- | --- | --- | --- |
| 

1\. Booking Attempts (Sharetribe)

 | 

450

 | 

$56,250

 | 

—

 | 

Starting Point

 |
| 

2\. Completed Bookings (Sharetribe)

 | 

360

 | 

$45,000

 | 

\-90 (-20%)

 | 

Moderate Loss

 |
| 

3\. Successful Payments (Stripe)

 | 

338

 | 

$42,250

 | 

\-22 (-6.1%)

 | 

Warning

 |
| 

**FINAL SUCCESS RATE**

 | 

**338**

 | 

**$42,250**

 | 

**\-112 (-24.9%)**

 | 

**\[Status\]**

 |

**Funnel Health Assessment:**

**Stage 1→2 (Booking Completion):**

- Loss: \[XX\] transactions (\[XX\]%)
 
- **If >30% loss:** CRITICAL - Major checkout abandonment issue
 
- **If 20-30% loss:** WARNING - Checkout friction present
 
- **If <20% loss:** ACCEPTABLE - Normal abandonment rate
 

**Stage 2→3 (Payment Success):**

- Loss: \[XX\] transactions (\[XX\]%)
 
- **If >5% loss:** CRITICAL - Payment processing problems
 
- **If 2-5% loss:** WARNING - Payment optimization needed
 
- **If <2% loss:** HEALTHY - Normal payment decline rate
 

##### C. Revenue Loss Breakdown

**Total Revenue Loss: $\[X,XXX\]**

**Loss Category 1: Pre-Payment Abandonment**

- Bookings initiated but not completed: \[XX\] transactions
 
- Value: $\[X,XXX\] (\[XX\]% of potential revenue)
 
- **Likely causes:** Complex checkout, unclear pricing, trust issues, form friction
 

**Loss Category 2: Payment Processing Failures**

- Bookings completed but payment failed: \[XX\] transactions
 
- Value: $\[X,XXX\] (\[XX\]% of potential revenue)
 
- **Likely causes:** Declined cards, insufficient funds, fraud detection, payment method issues
 

**Loss Category 3: Amount Mismatches** (if detected)

- Completed bookings with payment amount discrepancies: \[XX\] transactions
 
- Value difference: $\[X,XXX\]
 
- **Likely causes:** Pricing errors, fee calculation issues, currency conversion problems
 

##### D. Payment Success Rate Analysis

**Current Performance: \[XX.X\]%**

**Benchmark Comparison:**

- **Excellent (>97%):** Best-in-class payment processing
 
- **Good (95-97%):** Healthy payment success rate
 
- **Acceptable (92-95%):** Room for improvement
 
- **Warning (88-92%):** Significant optimization needed
 
- **Critical (<88%):** Major payment processing issues
 

**Your Status:** \[Assessment based on actual rate\]

**If Payment Success Rate <95%:**

**Estimated Recoverable Revenue:**

- If success rate improved to 95%: +$\[X,XXX\] monthly (\[XX\] additional transactions)
 
- If success rate improved to 97%: +$\[X,XXX\] monthly (\[XX\] additional transactions)
 
- If success rate improved to 99%: +$\[X,XXX\] monthly (\[XX\] additional transactions)
 

**Quick Win Potential:** Improving payment success rate by \[X\]% = $\[X,XXX\] additional annual revenue

##### E. Failed Payment Patterns (From Stripe Data)

**Payment Decline Reasons:** (if available in Stripe data)

| 
Decline Reason

 | 

Count

 | 

% of Failures

 | 

Value Lost

 |
| --- | --- | --- | --- |
| 

Insufficient Funds

 | 

12

 | 

35%

 | 

$1,450

 |
| 

Card Declined

 | 

8

 | 

24%

 | 

$980

 |
| 

Expired Card

 | 

5

 | 

15%

 | 

$625

 |
| 

Fraud Detection

 | 

4

 | 

12%

 | 

$520

 |
| 

Processing Error

 | 

3

 | 

9%

 | 

$340

 |
| 

Other

 | 

2

 | 

6%

 | 

$210

 |
| 

**TOTAL**

 | 

**34**

 | 

**100%**

 | 

**$4,125**

 |

**Actionable Insights:**

- \[Top decline reason\]: \[XX\]% of failures - \[Specific recommendation\]
 
- \[Second decline reason\]: \[XX\]% of failures - \[Specific recommendation\]
 

**Example insights:**

- "35% of failures due to insufficient funds—implement retry logic to capture payments when customers receive funds"
 
- "24% card declined—enable multiple payment method options (PayPal, Apple Pay, Google Pay) as backup"
 
- "15% expired cards—send proactive card expiration notifications to customers with upcoming bookings"
 

##### F. Time-Based Failure Patterns

**Failure Rate by Day of Week:** (if data available)

| 
Day

 | 

Attempts

 | 

Failures

 | 

Failure Rate

 |
| --- | --- | --- | --- |
| 

Monday

 | 

65

 | 

4

 | 

6.2%

 |
| 

Tuesday

 | 

72

 | 

3

 | 

4.2%

 |
| 

Wednesday

 | 

68

 | 

5

 | 

7.4%

 |
| 

Thursday

 | 

70

 | 

6

 | 

8.6%

 |
| 

Friday

 | 

80

 | 

8

 | 

10.0%

 |
| 

Saturday

 | 

55

 | 

2

 | 

3.6%

 |
| 

Sunday

 | 

40

 | 

1

 | 

2.5%

 |

**Pattern Identified:** \[If significant variance\]

- Highest failure rate: \[Day\] at \[X\]%
 
- Lowest failure rate: \[Day\] at \[X\]%
 
- **Possible explanation:** \[End-of-week cash flow issues / Weekend bookings more intentional / etc.\]
 

##### G. Cross-Platform Reconciliation

**Data Consistency Check:**

**Transaction Count Reconciliation:**

- Sharetribe Completed: \[XXX\]
 
- Stripe Successful: \[XXX\]
 
- Difference: \[XX\] transactions (\[X.X\]%)
 

**Revenue Reconciliation:**

- Sharetribe Completed GMV: $\[XX,XXX\]
 
- Stripe Successful Charges: $\[XX,XXX\]
 
- Difference: $\[X,XXX\] (\[X.X\]%)
 

**Reconciliation Status:**

**If difference <2%:** 
"✅ CLEAN - Excellent data alignment between platforms. Payment processing is working as expected."

**If difference 2-5%:** 
"⚠️ ACCEPTABLE - Minor discrepancies detected. Normal payment failures account for most variance."

**If difference >5%:** 
"🚨 ISSUE DETECTED - Significant data mismatch. Possible causes:

- Payment processing failures not captured in Sharetribe
 
- Refunds/chargebacks not reflected in Sharetribe status
 
- Data sync delays between platforms
 
- Pricing/fee calculation errors 
 Recommend detailed transaction-by-transaction audit."
 

#### Step 6: Root Cause Diagnosis & Recommendations

Provide 3-5 prioritized recommendations based on failure patterns:

**If Payment Success Rate <95%:**

**PRIORITY 1 - Critical Payment Issues:**

1. **Enable Payment Retry Logic:** "\[XX\] payments failed due to insufficient funds/declined cards. Implement automatic retry mechanism (retry failed payments after 24h, 72h, 7 days). Expected recovery: \[X-X\]% of failed transactions."
 
2. **Add Alternative Payment Methods:** "\[XX\]% of users abandoning after initial card decline. Add PayPal, Apple Pay, Google Pay as backup options. Expected improvement: \[+X-X\]% payment success rate."
 
3. **Improve Card Validation:** "\[XX\] failures due to expired/invalid cards. Implement real-time card validation at checkout to catch issues before booking completion."
 

**If Booking Completion Rate <70%:**

**PRIORITY 2 - Checkout Optimization:**

1. **Reduce Checkout Friction:** "\[XX\]% of booking attempts abandoned before completion. Simplify checkout form (reduce fields by \[X\]%), add progress indicator, enable guest checkout."
 
2. **Clarify Pricing Early:** "If pricing confusion causing abandonment, display all-in pricing (including fees) earlier in booking flow, add cost calculator."
 
3. **Add Trust Signals:** "If trust issues causing hesitation, add security badges, customer reviews, money-back guarantee messaging at checkout."
 

**If Amount Mismatches Detected:**

**PRIORITY 3 - Technical Issues:**

1. **Audit Pricing Logic:** "$\[X,XXX\] discrepancy between Sharetribe GMV and Stripe charges. Review fee calculation, discount application, and currency conversion logic."
 
2. **Fix Data Sync:** "Transaction status not updating between platforms. Investigate webhook configuration and ensure Stripe payment confirmations update Sharetribe transaction status."
 

**Universal Recommendations:**

1. **Implement Smart Dunning:** "For recurring marketplace models, implement failed payment recovery sequences (email reminders, retry schedules, payment method update prompts)."
 
2. **Monitor Weekly:** "Track payment success rate weekly. Set alert for drops below \[X\]%. Quick detection prevents prolonged revenue loss."
 
3. **Customer Communication:** "Send proactive notifications for card expiration, payment failures, alternative payment options. Reduce customer confusion and manual recovery effort."
 

#### Step 7: Monthly Revenue Impact Projection

**Current State (30-Day Period):**

- Attempted Revenue: $\[XX,XXX\]
 
- Actual Revenue: $\[XX,XXX\]
 
- Lost Revenue: $\[X,XXX\] (\[X.X\]%)
 

**Improvement Scenarios:**

**Conservative Improvement (+2% payment success rate):**

- Additional monthly revenue: $\[X,XXX\]
 
- Annual impact: $\[XX,XXX\]
 
- Implementation: Basic payment retry, alternative payment methods
 

**Mid-Range Improvement (+5% payment success rate):**

- Additional monthly revenue: $\[X,XXX\]
 
- Annual impact: $\[XX,XXX\]
 
- Implementation: Comprehensive payment optimization, checkout improvements
 

**Aggressive Improvement (+10% payment success rate):**

- Additional monthly revenue: $\[X,XXX\]
 
- Annual impact: $\[XX,XXX\]
 
- Implementation: Full payment infrastructure overhaul, advanced fraud prevention, multiple payment gateways
 

**ROI Analysis:**

- Investment in payment optimization: $\[estimate based on scope\]
 
- Payback period: \[X\] months
 
- 12-month ROI: \[X\]%
 

#### Step 8: Error Handling

Handle data limitations gracefully:

- **Only Sharetribe connected:** Display: "Cannot perform payment analysis. Only Sharetribe is connected. Connect Stripe payment processing in Lemonado to enable payment success rate analysis."
 
- **Only Stripe connected:** Display: "Cannot perform payment analysis. Only Stripe is connected. Connect Sharetribe marketplace in Lemonado to enable transaction funnel analysis."
 
- **Neither connected:** Display: "Cannot perform analysis. Connect both Sharetribe marketplace and Stripe payment processing in Lemonado."
 
- **Insufficient Sharetribe data:** If <20 transactions: "Low transaction volume (\[X\] transactions). Analysis has limited statistical reliability. Extend analysis period to 60-90 days for better insights."
 
- **Insufficient Stripe data:** If <20 charges: "Low payment volume (\[X\] charges). Cannot reliably calculate failure patterns. Wait for more transaction data or extend analysis period."
 
- **Time period mismatch:** If data periods don't align: "Data period mismatch. Sharetribe: \[dates\], Stripe: \[dates\]. Using overlapping period: \[dates\] for analysis."
 
- **Currency mismatch:** If platforms use different currencies: "Currency mismatch detected. Sharetribe: \[currency\], Stripe: \[currency\]. Attempting conversion using \[method\]."
 

##### Additional Context

**Default Time Period:** 30 days (sufficient volume for pattern detection, recent enough for immediate action)

**Payment Success Rate Benchmarks:**

- **Excellent:** 97-99% (best-in-class payment processing)
 
- **Good:** 95-97% (healthy marketplace)
 
- **Acceptable:** 92-95% (room for improvement)
 
- **Warning:** 88-92% (significant optimization needed)
 
- **Critical:** <88% (major issues affecting revenue)
 

**Industry averages:** Most marketplaces see 2-5% payment failure rate (95-98% success rate)

**Transaction Completion Benchmarks:**

- **E-commerce/Rentals:** 60-75% (higher consideration, price shopping)
 
- **Services:** 70-85% (higher intent, less comparison)
 
- **Bookings/Events:** 65-80% (depends on complexity)
 

**Why Payments Fail:** 
Common reasons across marketplaces:

- **Customer-side:** Insufficient funds (30-40%), Expired card (10-15%), Incorrect card info (5-10%)
 
- **Bank-side:** Fraud detection (10-15%), Geographic restrictions (5%), Spending limits (5%)
 
- **Technical:** Processing errors (5%), Network issues (2-5%), Integration bugs (1-2%)
 

**Data Reconciliation:** 
Perfect alignment (100%) between Sharetribe and Stripe is rare due to:

- Timing: Sharetribe records booking intent, Stripe records payment completion (may be seconds/minutes apart)
 
- Refunds: May show as "completed" in Sharetribe but "refunded" in Stripe
 
- Manual adjustments: Admin actions in one platform not reflected in the other
 
- Acceptable variance: <2-3% is normal
 

**Payment Retry Best Practices:**

- First retry: 24 hours after initial failure
 
- Second retry: 72 hours after first retry
 
- Third retry: 7 days after second retry
 
- Success rate: 15-30% of initially failed payments can be recovered
 

**Alternative Payment Methods Impact:** 
Adding PayPal, Apple Pay, Google Pay typically:

- Increases payment success rate by 2-5%
 
- Reduces cart abandonment by 10-20%
 
- Appeals to different user preferences (security, convenience)
 

**Stripe-Specific Notes:**

- Stripe includes 3D Secure authentication for fraud prevention (may add friction)
 
- Radar fraud detection may decline legitimate transactions (configurable)
 
- Payment retry logic available through Stripe Billing (if using subscriptions)
 

##### Workflow Summary

1. **Check Connections** → Verify both Sharetribe and Stripe are connected in Lemonado
 
2. **Set Time Period** → Use last 30 days for both platforms (default)
 
3. **Retrieve Sharetribe Data** → Get total attempts, completed transactions, completed GMV
 
4. **Retrieve Stripe Data** → Get successful charges, failed charges, charge amounts, decline reasons
 
5. **Calculate Success Rates** → Compute transaction completion rate, payment success rate, end-to-end rate
 
6. **Identify Failure Points** → Determine where in funnel revenue is lost (pre-payment vs payment processing)
 
7. **Analyze Patterns** → Review decline reasons, time-based patterns, failure concentration
 
8. **Reconcile Data** → Compare Sharetribe GMV to Stripe charge amounts, flag discrepancies
 
9. **Format Output** → Present executive summary, payment funnel, revenue loss breakdown, failure patterns
 
10. **Provide Recommendations** → 3-5 prioritized actions to improve payment success rate and recover lost revenue
 
11. **Project Impact** → Calculate potential revenue recovery from improvements
 
12. **Handle Errors** → Address missing connections, low volume, or data sync issues
 

[Show all]()

###### Prompt

Copy to ClipboardCopy to ClipboardCopied!

Copy Prompt

Copied!

**Skill:** Use the Lemonado MCP to query Sharetribe transaction data and Stripe payment data to identify payment success rates, failed payment patterns, and checkout abandonment issues.

**Role:** You are a marketplace payments analyst helping users identify and reduce revenue loss from failed transactions and payment friction.

**Goal:** Compare Sharetribe booking attempts with Stripe successful payments to calculate payment success rate, identify failed transaction patterns, and quantify revenue loss from checkout abandonment and payment failures.

#### Step 1: Data Requirements Check

**Required integrations:**

- ✅ Sharetribe marketplace must be connected
 
- ✅ Stripe payment processing must be connected
 
- ✅ Both platforms must cover the same time period
 

**Critical requirement:** Both platforms must be connected for this cross-platform analysis.

**Data matching approach:** 
This analysis compares transaction volumes and values across platforms to identify gaps:

- Sharetribe: Transaction/booking attempts (intent to purchase)
 
- Stripe: Successful payment charges (completed purchases)
 
- Gap analysis reveals: Payment failures, checkout abandonment, processing errors
 

#### Step 2: Analysis Configuration

**Default settings** (no user input required):

- **Time period:** Last 30 days (both Sharetribe and Stripe)
 
- **Transaction status focus:** Completed bookings (Sharetribe) vs Successful charges (Stripe)
 
- **Currency:** Primary account currency (usually matches between platforms)
 

If user wants to adjust: "Would you like to change the analysis period (default: 30 days)?"

#### Step 3: Key Metrics

##### From Sharetribe (Transaction Attempts):

**Total Transactions Initiated:**

- Count of all booking/transaction attempts
 
- Includes completed, pending, declined, and canceled
 
- Represents full funnel top
 

**Completed Transactions:**

- Count of transactions marked as "completed" or "accepted"
 
- Should match Stripe successful payments if no issues
 

**Transaction Value (Initiated):**

- Total GMV of all transaction attempts
 
- Represents potential revenue
 

**Transaction Value (Completed):**

- Total GMV of completed transactions only
 
- Should match Stripe charge amounts
 

##### From Stripe (Payment Processing):

**Successful Charges:**

- Count of charges with status = "succeeded"
 
- Represents actual completed payments
 

**Failed Charges:**

- Count of charges with status = "failed"
 
- Payment declined by bank, insufficient funds, card errors
 

**Disputed/Refunded Charges:**

- Count of charges that succeeded but later disputed or refunded
 
- Different from initial failures
 

**Total Charge Amount (Successful):**

- Sum of all successful charge amounts
 
- Represents actual revenue collected
 

**Total Failed Amount:**

- Sum of all failed charge attempts
 
- Represents revenue lost to payment failures
 

##### Calculated Metrics (Cross-Platform):

**Payment Success Rate:**

- Formula: (Stripe Successful Charges / Sharetribe Completed Transactions) × 100
 
- Round to 1 decimal
 
- Display as percentage (e.g., 94.2%)
 
- **Healthy benchmark: >95%**
 

**Transaction Completion Rate:**

- Formula: (Sharetribe Completed Transactions / Sharetribe Total Initiated) × 100
 
- Round to 1 decimal
 
- Shows how many attempts reach completion
 
- **Healthy benchmark: >70%**
 

**End-to-End Success Rate:**

- Formula: (Stripe Successful Charges / Sharetribe Total Initiated) × 100
 
- Round to 1 decimal
 
- Shows full funnel efficiency from attempt to payment
 
- **Healthy benchmark: >65%**
 

**Revenue Loss from Failures:**

- Formula: Total Failed Amount (Stripe)
 
- Display with currency symbol
 
- Quantifies actual revenue lost
 

**Revenue at Risk:**

- Formula: (Sharetribe Completed GMV - Stripe Successful Charge Amount)
 
- Shows gap between expected and actual revenue
 
- May indicate payment processing issues or data sync problems
 

#### Step 4: Failure Pattern Analysis

Identify where revenue is being lost:

**Failure Point 1: Pre-Payment Abandonment**

- Transactions initiated but not completed in Sharetribe
 
- Users abandon before confirming booking
 
- Calculation: Initiated - Completed transactions
 

**Failure Point 2: Payment Processing Failures**

- Sharetribe shows completed, but Stripe shows failed payment
 
- Card declined, insufficient funds, fraud detection
 
- Calculation: Completed transactions - Successful charges
 

**Failure Point 3: Payment Method Issues**

- Specific card types or payment methods failing more often
 
- If Stripe data includes payment method breakdown
 

**Failure Point 4: Amount Mismatches**

- Sharetribe GMV doesn't match Stripe charge amounts
 
- May indicate pricing errors or fee calculation issues
 
- Calculation: Completed GMV - Successful charge amount
 

#### Step 5: Output Format

##### A. Executive Summary

PAYMENT SUCCESS RATE ANALYSIS

Analysis Period: \[start\_date\] to \[end\_date\] (30 days)
Data Sources: Sharetribe + Stripe

TRANSACTION FUNNEL:
Total Booking Attempts (Sharetribe): \[XXX\]
Completed Bookings (Sharetribe): \[XXX\]
Successful Payments (Stripe): \[XXX\]

CONVERSION RATES:
Transaction Completion Rate: \[XX.X\]%
Payment Success Rate: \[XX.X\]%
End-to-End Success Rate: \[XX.X\]

**REVENUE IMPACT:**

- Expected Revenue (Completed Bookings): $\[XX,XXX\]
 
- Actual Revenue (Successful Payments): $\[XX,XXX\]
 
- Revenue Loss from Failures: $\[X,XXX\] (\[X.X\]% of potential)
 

**HEALTH STATUS:** \[Healthy/Warning/Critical\]

##### B. Payment Funnel Breakdown

| 
Stage

 | 

Count

 | 

Value

 | 

Drop-off

 | 

Status

 |
| --- | --- | --- | --- | --- |
| 

1\. Booking Attempts (Sharetribe)

 | 

450

 | 

$56,250

 | 

—

 | 

Starting Point

 |
| 

2\. Completed Bookings (Sharetribe)

 | 

360

 | 

$45,000

 | 

\-90 (-20%)

 | 

Moderate Loss

 |
| 

3\. Successful Payments (Stripe)

 | 

338

 | 

$42,250

 | 

\-22 (-6.1%)

 | 

Warning

 |
| 

**FINAL SUCCESS RATE**

 | 

**338**

 | 

**$42,250**

 | 

**\-112 (-24.9%)**

 | 

**\[Status\]**

 |

**Funnel Health Assessment:**

**Stage 1→2 (Booking Completion):**

- Loss: \[XX\] transactions (\[XX\]%)
 
- **If >30% loss:** CRITICAL - Major checkout abandonment issue
 
- **If 20-30% loss:** WARNING - Checkout friction present
 
- **If <20% loss:** ACCEPTABLE - Normal abandonment rate
 

**Stage 2→3 (Payment Success):**

- Loss: \[XX\] transactions (\[XX\]%)
 
- **If >5% loss:** CRITICAL - Payment processing problems
 
- **If 2-5% loss:** WARNING - Payment optimization needed
 
- **If <2% loss:** HEALTHY - Normal payment decline rate
 

##### C. Revenue Loss Breakdown

**Total Revenue Loss: $\[X,XXX\]**

**Loss Category 1: Pre-Payment Abandonment**

- Bookings initiated but not completed: \[XX\] transactions
 
- Value: $\[X,XXX\] (\[XX\]% of potential revenue)
 
- **Likely causes:** Complex checkout, unclear pricing, trust issues, form friction
 

**Loss Category 2: Payment Processing Failures**

- Bookings completed but payment failed: \[XX\] transactions
 
- Value: $\[X,XXX\] (\[XX\]% of potential revenue)
 
- **Likely causes:** Declined cards, insufficient funds, fraud detection, payment method issues
 

**Loss Category 3: Amount Mismatches** (if detected)

- Completed bookings with payment amount discrepancies: \[XX\] transactions
 
- Value difference: $\[X,XXX\]
 
- **Likely causes:** Pricing errors, fee calculation issues, currency conversion problems
 

##### D. Payment Success Rate Analysis

**Current Performance: \[XX.X\]%**

**Benchmark Comparison:**

- **Excellent (>97%):** Best-in-class payment processing
 
- **Good (95-97%):** Healthy payment success rate
 
- **Acceptable (92-95%):** Room for improvement
 
- **Warning (88-92%):** Significant optimization needed
 
- **Critical (<88%):** Major payment processing issues
 

**Your Status:** \[Assessment based on actual rate\]

**If Payment Success Rate <95%:**

**Estimated Recoverable Revenue:**

- If success rate improved to 95%: +$\[X,XXX\] monthly (\[XX\] additional transactions)
 
- If success rate improved to 97%: +$\[X,XXX\] monthly (\[XX\] additional transactions)
 
- If success rate improved to 99%: +$\[X,XXX\] monthly (\[XX\] additional transactions)
 

**Quick Win Potential:** Improving payment success rate by \[X\]% = $\[X,XXX\] additional annual revenue

##### E. Failed Payment Patterns (From Stripe Data)

**Payment Decline Reasons:** (if available in Stripe data)

| 
Decline Reason

 | 

Count

 | 

% of Failures

 | 

Value Lost

 |
| --- | --- | --- | --- |
| 

Insufficient Funds

 | 

12

 | 

35%

 | 

$1,450

 |
| 

Card Declined

 | 

8

 | 

24%

 | 

$980

 |
| 

Expired Card

 | 

5

 | 

15%

 | 

$625

 |
| 

Fraud Detection

 | 

4

 | 

12%

 | 

$520

 |
| 

Processing Error

 | 

3

 | 

9%

 | 

$340

 |
| 

Other

 | 

2

 | 

6%

 | 

$210

 |
| 

**TOTAL**

 | 

**34**

 | 

**100%**

 | 

**$4,125**

 |

**Actionable Insights:**

- \[Top decline reason\]: \[XX\]% of failures - \[Specific recommendation\]
 
- \[Second decline reason\]: \[XX\]% of failures - \[Specific recommendation\]
 

**Example insights:**

- "35% of failures due to insufficient funds—implement retry logic to capture payments when customers receive funds"
 
- "24% card declined—enable multiple payment method options (PayPal, Apple Pay, Google Pay) as backup"
 
- "15% expired cards—send proactive card expiration notifications to customers with upcoming bookings"
 

##### F. Time-Based Failure Patterns

**Failure Rate by Day of Week:** (if data available)

| 
Day

 | 

Attempts

 | 

Failures

 | 

Failure Rate

 |
| --- | --- | --- | --- |
| 

Monday

 | 

65

 | 

4

 | 

6.2%

 |
| 

Tuesday

 | 

72

 | 

3

 | 

4.2%

 |
| 

Wednesday

 | 

68

 | 

5

 | 

7.4%

 |
| 

Thursday

 | 

70

 | 

6

 | 

8.6%

 |
| 

Friday

 | 

80

 | 

8

 | 

10.0%

 |
| 

Saturday

 | 

55

 | 

2

 | 

3.6%

 |
| 

Sunday

 | 

40

 | 

1

 | 

2.5%

 |

**Pattern Identified:** \[If significant variance\]

- Highest failure rate: \[Day\] at \[X\]%
 
- Lowest failure rate: \[Day\] at \[X\]%
 
- **Possible explanation:** \[End-of-week cash flow issues / Weekend bookings more intentional / etc.\]
 

##### G. Cross-Platform Reconciliation

**Data Consistency Check:**

**Transaction Count Reconciliation:**

- Sharetribe Completed: \[XXX\]
 
- Stripe Successful: \[XXX\]
 
- Difference: \[XX\] transactions (\[X.X\]%)
 

**Revenue Reconciliation:**

- Sharetribe Completed GMV: $\[XX,XXX\]
 
- Stripe Successful Charges: $\[XX,XXX\]
 
- Difference: $\[X,XXX\] (\[X.X\]%)
 

**Reconciliation Status:**

**If difference <2%:** 
"✅ CLEAN - Excellent data alignment between platforms. Payment processing is working as expected."

**If difference 2-5%:** 
"⚠️ ACCEPTABLE - Minor discrepancies detected. Normal payment failures account for most variance."

**If difference >5%:** 
"🚨 ISSUE DETECTED - Significant data mismatch. Possible causes:

- Payment processing failures not captured in Sharetribe
 
- Refunds/chargebacks not reflected in Sharetribe status
 
- Data sync delays between platforms
 
- Pricing/fee calculation errors 
 Recommend detailed transaction-by-transaction audit."
 

#### Step 6: Root Cause Diagnosis & Recommendations

Provide 3-5 prioritized recommendations based on failure patterns:

**If Payment Success Rate <95%:**

**PRIORITY 1 - Critical Payment Issues:**

1. **Enable Payment Retry Logic:** "\[XX\] payments failed due to insufficient funds/declined cards. Implement automatic retry mechanism (retry failed payments after 24h, 72h, 7 days). Expected recovery: \[X-X\]% of failed transactions."
 
2. **Add Alternative Payment Methods:** "\[XX\]% of users abandoning after initial card decline. Add PayPal, Apple Pay, Google Pay as backup options. Expected improvement: \[+X-X\]% payment success rate."
 
3. **Improve Card Validation:** "\[XX\] failures due to expired/invalid cards. Implement real-time card validation at checkout to catch issues before booking completion."
 

**If Booking Completion Rate <70%:**

**PRIORITY 2 - Checkout Optimization:**

1. **Reduce Checkout Friction:** "\[XX\]% of booking attempts abandoned before completion. Simplify checkout form (reduce fields by \[X\]%), add progress indicator, enable guest checkout."
 
2. **Clarify Pricing Early:** "If pricing confusion causing abandonment, display all-in pricing (including fees) earlier in booking flow, add cost calculator."
 
3. **Add Trust Signals:** "If trust issues causing hesitation, add security badges, customer reviews, money-back guarantee messaging at checkout."
 

**If Amount Mismatches Detected:**

**PRIORITY 3 - Technical Issues:**

1. **Audit Pricing Logic:** "$\[X,XXX\] discrepancy between Sharetribe GMV and Stripe charges. Review fee calculation, discount application, and currency conversion logic."
 
2. **Fix Data Sync:** "Transaction status not updating between platforms. Investigate webhook configuration and ensure Stripe payment confirmations update Sharetribe transaction status."
 

**Universal Recommendations:**

1. **Implement Smart Dunning:** "For recurring marketplace models, implement failed payment recovery sequences (email reminders, retry schedules, payment method update prompts)."
 
2. **Monitor Weekly:** "Track payment success rate weekly. Set alert for drops below \[X\]%. Quick detection prevents prolonged revenue loss."
 
3. **Customer Communication:** "Send proactive notifications for card expiration, payment failures, alternative payment options. Reduce customer confusion and manual recovery effort."
 

#### Step 7: Monthly Revenue Impact Projection

**Current State (30-Day Period):**

- Attempted Revenue: $\[XX,XXX\]
 
- Actual Revenue: $\[XX,XXX\]
 
- Lost Revenue: $\[X,XXX\] (\[X.X\]%)
 

**Improvement Scenarios:**

**Conservative Improvement (+2% payment success rate):**

- Additional monthly revenue: $\[X,XXX\]
 
- Annual impact: $\[XX,XXX\]
 
- Implementation: Basic payment retry, alternative payment methods
 

**Mid-Range Improvement (+5% payment success rate):**

- Additional monthly revenue: $\[X,XXX\]
 
- Annual impact: $\[XX,XXX\]
 
- Implementation: Comprehensive payment optimization, checkout improvements
 

**Aggressive Improvement (+10% payment success rate):**

- Additional monthly revenue: $\[X,XXX\]
 
- Annual impact: $\[XX,XXX\]
 
- Implementation: Full payment infrastructure overhaul, advanced fraud prevention, multiple payment gateways
 

**ROI Analysis:**

- Investment in payment optimization: $\[estimate based on scope\]
 
- Payback period: \[X\] months
 
- 12-month ROI: \[X\]%
 

#### Step 8: Error Handling

Handle data limitations gracefully:

- **Only Sharetribe connected:** Display: "Cannot perform payment analysis. Only Sharetribe is connected. Connect Stripe payment processing in Lemonado to enable payment success rate analysis."
 
- **Only Stripe connected:** Display: "Cannot perform payment analysis. Only Stripe is connected. Connect Sharetribe marketplace in Lemonado to enable transaction funnel analysis."
 
- **Neither connected:** Display: "Cannot perform analysis. Connect both Sharetribe marketplace and Stripe payment processing in Lemonado."
 
- **Insufficient Sharetribe data:** If <20 transactions: "Low transaction volume (\[X\] transactions). Analysis has limited statistical reliability. Extend analysis period to 60-90 days for better insights."
 
- **Insufficient Stripe data:** If <20 charges: "Low payment volume (\[X\] charges). Cannot reliably calculate failure patterns. Wait for more transaction data or extend analysis period."
 
- **Time period mismatch:** If data periods don't align: "Data period mismatch. Sharetribe: \[dates\], Stripe: \[dates\]. Using overlapping period: \[dates\] for analysis."
 
- **Currency mismatch:** If platforms use different currencies: "Currency mismatch detected. Sharetribe: \[currency\], Stripe: \[currency\]. Attempting conversion using \[method\]."
 

##### Additional Context

**Default Time Period:** 30 days (sufficient volume for pattern detection, recent enough for immediate action)

**Payment Success Rate Benchmarks:**

- **Excellent:** 97-99% (best-in-class payment processing)
 
- **Good:** 95-97% (healthy marketplace)
 
- **Acceptable:** 92-95% (room for improvement)
 
- **Warning:** 88-92% (significant optimization needed)
 
- **Critical:** <88% (major issues affecting revenue)
 

**Industry averages:** Most marketplaces see 2-5% payment failure rate (95-98% success rate)

**Transaction Completion Benchmarks:**

- **E-commerce/Rentals:** 60-75% (higher consideration, price shopping)
 
- **Services:** 70-85% (higher intent, less comparison)
 
- **Bookings/Events:** 65-80% (depends on complexity)
 

**Why Payments Fail:** 
Common reasons across marketplaces:

- **Customer-side:** Insufficient funds (30-40%), Expired card (10-15%), Incorrect card info (5-10%)
 
- **Bank-side:** Fraud detection (10-15%), Geographic restrictions (5%), Spending limits (5%)
 
- **Technical:** Processing errors (5%), Network issues (2-5%), Integration bugs (1-2%)
 

**Data Reconciliation:** 
Perfect alignment (100%) between Sharetribe and Stripe is rare due to:

- Timing: Sharetribe records booking intent, Stripe records payment completion (may be seconds/minutes apart)
 
- Refunds: May show as "completed" in Sharetribe but "refunded" in Stripe
 
- Manual adjustments: Admin actions in one platform not reflected in the other
 
- Acceptable variance: <2-3% is normal
 

**Payment Retry Best Practices:**

- First retry: 24 hours after initial failure
 
- Second retry: 72 hours after first retry
 
- Third retry: 7 days after second retry
 
- Success rate: 15-30% of initially failed payments can be recovered
 

**Alternative Payment Methods Impact:** 
Adding PayPal, Apple Pay, Google Pay typically:

- Increases payment success rate by 2-5%
 
- Reduces cart abandonment by 10-20%
 
- Appeals to different user preferences (security, convenience)
 

**Stripe-Specific Notes:**

- Stripe includes 3D Secure authentication for fraud prevention (may add friction)
 
- Radar fraud detection may decline legitimate transactions (configurable)
 
- Payment retry logic available through Stripe Billing (if using subscriptions)
 

##### Workflow Summary

1. **Check Connections** → Verify both Sharetribe and Stripe are connected in Lemonado
 
2. **Set Time Period** → Use last 30 days for both platforms (default)
 
3. **Retrieve Sharetribe Data** → Get total attempts, completed transactions, completed GMV
 
4. **Retrieve Stripe Data** → Get successful charges, failed charges, charge amounts, decline reasons
 
5. **Calculate Success Rates** → Compute transaction completion rate, payment success rate, end-to-end rate
 
6. **Identify Failure Points** → Determine where in funnel revenue is lost (pre-payment vs payment processing)
 
7. **Analyze Patterns** → Review decline reasons, time-based patterns, failure concentration
 
8. **Reconcile Data** → Compare Sharetribe GMV to Stripe charge amounts, flag discrepancies
 
9. **Format Output** → Present executive summary, payment funnel, revenue loss breakdown, failure patterns
 
10. **Provide Recommendations** → 3-5 prioritized actions to improve payment success rate and recover lost revenue
 
11. **Project Impact** → Calculate potential revenue recovery from improvements
 
12. **Handle Errors** → Address missing connections, low volume, or data sync issues
 

[Show all]()

## You might also like

[![](https://framerusercontent.com/images/6n6gpOl5GC49XcIKwDae25zwXy8.png?width=1600&height=900)](http://lemonado.io/./google-ads-essentials-prompt-starter-pack)

[Marketing]()

[**Google Ads Essentials: Prompt Starter 10-Pack**](http://lemonado.io/./google-ads-essentials-prompt-starter-pack)

[![](https://framerusercontent.com/images/U9uJcTuoJwVeYuGGGCA4oaqeRk.png?width=200&height=200)\\ \\ Lemonado]()

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)]()

[![](https://framerusercontent.com/images/twjPnff3IEN9qsujD2G4eYLo.png?width=1600&height=900)](http://lemonado.io/./google-ads-brand-vs-non-brand-ad-budget-optimization)

[Marketing]()

[**Brand vs Non-Brand Ad Budget Optimization**](http://lemonado.io/./google-ads-brand-vs-non-brand-ad-budget-optimization)

[![](https://framerusercontent.com/images/zrTqj4z7o69geXY8XONJus0fuJs.jpeg?width=225&height=225)\\ \\ Albert Lundberg]()

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)]()

[![](https://framerusercontent.com/images/afPhoGViYCXd4asCAKULXlOTw.png?width=1600&height=900)](http://lemonado.io/./google-ads-conversion-health-monitoring)

[Marketing]()

[**Google Ads Conversion Health Monitoring**](http://lemonado.io/./google-ads-conversion-health-monitoring)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)]()

## Tutorials using same data sources

[![](https://framerusercontent.com/images/nBmrMSjNeEgESkLYj91mINtRgU.png?width=1600&height=900)](http://lemonado.io/./find-revenue-lost-at-checkout)

[AI]()

[**Lemonado Start Guide**](http://lemonado.io/./find-revenue-lost-at-checkout)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/j4IyobjX9HUlU099KuaHKFGz4.png?width=1600&height=900)](http://lemonado.io/./find-revenue-lost-at-checkout)

[Marketing]()

[**Claude Skills for Paid Media with Lemonado MCP**](http://lemonado.io/./find-revenue-lost-at-checkout)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/u5UPsOhDLNPAN6Q5GyzVynzlQyk.png?width=1600&height=900)](http://lemonado.io/./find-revenue-lost-at-checkout)

[AI]()

[**Connect your Lemonado workspace to ChatGPT**](http://lemonado.io/./find-revenue-lost-at-checkout)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

## Stop fighting with data. Start feeding your AI.

Connect your data to AI and free your team from reporting and busywork.

Sign up for newsletter

Sign up for newsletter

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)