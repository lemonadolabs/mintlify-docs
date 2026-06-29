# Source: http://lemonado.io/prompts/meta-ads-daily-spend-check

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

![](https://framerusercontent.com/images/rYgGCtBH238A0RUorYRux6c5Do.png?width=1600&height=900)

# Daily Meta Ads Spend Check

[Try this in Lemonado](https://data.lemonado.io)

Data Sources

[![](https://framerusercontent.com/images/vfBuVq87wq2D7OYQ7KjX1ny4MEI.jpg?width=96&height=96)\\ \\ Meta Ads](http://lemonado.io/../integrations/meta-ads)

Tools

[![](https://framerusercontent.com/images/jIQ9aYsNwbinLNzcfutfqVaDSdk.webp?width=512&height=512)\\ \\ Claude]()

[![](https://framerusercontent.com/images/ietvNWZyh0Jex0mFcYlEXwXWZdM.png?width=225&height=225)\\ \\ ChatGPT]()

[![](https://framerusercontent.com/images/oxMoGqu45HYwRRNlWWj0YWM1RE.png?width=512&height=512)\\ \\ Gemini]()

Department

[Marketing]()

Creator

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[Try this in Lemonado](https://data.lemonado.io)

Quick daily spend verification showing yesterday's or last 24 hours' spend across all Meta Ads accounts compared to your average daily spend. See if you're on pace or overspending.

###### Prompt

Copy to ClipboardCopy to ClipboardCopied!

Copy Prompt

Copied!

**Skill:** Use Lemonado MCP to retrieve spend across all Meta Ads accounts for a 24-hour period and compare against average daily spend.

**Role:** You are an account manager performing routine daily spend checks.

**Goal:** Show spend for all Meta Ads accounts in a simple format with comparison to average.

#### Step 1: Time Period Selection

**Ask the user:** "Would you like to see:

1. Yesterday's spend (previous calendar day, 12:00 AM - 11:59 PM)
 
2. Last 24 hours from now (rolling 24-hour period)
 

Default: Yesterday's spend"

**If no response:** Default to Yesterday (Option 1)

**Time Period Options:**

- **Yesterday:** Previous calendar day in account timezone (e.g., Nov 24, 12:00 AM - 11:59 PM)
 
- **Last 24 Hours:** Exact 24-hour period from current moment (e.g., Nov 25 9:30 AM → Nov 24 9:30 AM)
 

#### Step 2: Data Collection

For each Meta Ads account, retrieve:

- Account name
 
- Spend for selected period
 
- Average daily spend (last 30 days)
 
- Number of active campaigns
 

#### Step 3: Calculations

For each account:

**Daily Variance:**

- Formula: Yesterday's Spend - Average Daily Spend
 
- Display with currency symbol
 
- Show as positive (over) or negative (under)
 

**Percentage Change:**

- Formula: ((Yesterday's Spend - Average Daily Spend) / Average Daily Spend) × 100
 
- Round to 1 decimal
 
- Display as percentage
 

#### Step 4: Output Format

**Header:**

META ADS DAILY SPEND CHECK

Period: \[Date/Time Range\]

Total Accounts: \[N\]

**Main Table:**

Account NameYesterday's SpendAvg Daily SpendVarianceChangeClient A - Ecommerce$1,456.89$1,320.00+$136.89+10.4%Client B - Lead Gen$892.34$950.00-$57.66-6.1%Client C - Brand Awareness$2,103.50$2,000.00+$103.50+5.2%Client D - Local Services$345.67$400.00-$54.33-13.6%

Account NameYesterday's SpendAvg Daily SpendVarianceChangeClient A - Ecommerce$1,456.89$1,320.00+$136.89+10.4%Client B - Lead Gen$892.34$950.00-$57.66-6.1%Client C - Brand Awareness$2,103.50$2,000.00+$103.50+5.2%Client D - Local Services$345.67$400.00-$54.33-13.6%

**Summary:**

Total Spend Yesterday: $4,798.40

Total Avg Daily Spend: $4,670.00

Overall Variance: +$128.40 (+2.7%)

Accounts Over Average: 2 accounts

Accounts Under Average: 2 accounts

#### Step 5: Error Handling

**Handle data limitations gracefully:**

- **No spend data:** If account shows $0 spend: "No spend recorded - verify campaigns are active"
 
- **No average available:** If less than 7 days of history: "Insufficient history to calculate average daily spend"
 
- **Account access issues:** Note: "\[Account Name\] - Unable to retrieve data (check permissions)"
 
- **Timezone discrepancy:** Note which timezone is used for "yesterday" calculation
 

#### Additional Context

**Default Time Period:** Yesterday (previous calendar day in account timezone)

**Average Daily Spend:** Calculated from last 30 days of spend history

**Variance Interpretation:**

- +/- 10%: Normal daily fluctuation
 
- +/- 10-20%: Moderate change, monitor
 
- +/- >20%: Significant change, investigate
 

#### Workflow Summary

1. **Ask Time Period** → Yesterday or Last 24 Hours from now
 
2. **Retrieve Data** → Get spend for selected period and 30-day average
 
3. **Calculate Variance** → Compute difference and percentage change
 
4. **Format Output** → Present simple table with summary totals
 
5. **Handle Errors** → Address missing data or access issues
 

**Output Goal:** A 15-second scan showing if yesterday's spend was normal or needs attention.

[Show all]()

###### Prompt

Copy to ClipboardCopy to ClipboardCopied!

Copy Prompt

Copied!

**Skill:** Use Lemonado MCP to retrieve spend across all Meta Ads accounts for a 24-hour period and compare against average daily spend.

**Role:** You are an account manager performing routine daily spend checks.

**Goal:** Show spend for all Meta Ads accounts in a simple format with comparison to average.

#### Step 1: Time Period Selection

**Ask the user:** "Would you like to see:

1. Yesterday's spend (previous calendar day, 12:00 AM - 11:59 PM)
 
2. Last 24 hours from now (rolling 24-hour period)
 

Default: Yesterday's spend"

**If no response:** Default to Yesterday (Option 1)

**Time Period Options:**

- **Yesterday:** Previous calendar day in account timezone (e.g., Nov 24, 12:00 AM - 11:59 PM)
 
- **Last 24 Hours:** Exact 24-hour period from current moment (e.g., Nov 25 9:30 AM → Nov 24 9:30 AM)
 

#### Step 2: Data Collection

For each Meta Ads account, retrieve:

- Account name
 
- Spend for selected period
 
- Average daily spend (last 30 days)
 
- Number of active campaigns
 

#### Step 3: Calculations

For each account:

**Daily Variance:**

- Formula: Yesterday's Spend - Average Daily Spend
 
- Display with currency symbol
 
- Show as positive (over) or negative (under)
 

**Percentage Change:**

- Formula: ((Yesterday's Spend - Average Daily Spend) / Average Daily Spend) × 100
 
- Round to 1 decimal
 
- Display as percentage
 

#### Step 4: Output Format

**Header:**

META ADS DAILY SPEND CHECK

Period: \[Date/Time Range\]

Total Accounts: \[N\]

**Main Table:**

Account NameYesterday's SpendAvg Daily SpendVarianceChangeClient A - Ecommerce$1,456.89$1,320.00+$136.89+10.4%Client B - Lead Gen$892.34$950.00-$57.66-6.1%Client C - Brand Awareness$2,103.50$2,000.00+$103.50+5.2%Client D - Local Services$345.67$400.00-$54.33-13.6%

**Summary:**

Total Spend Yesterday: $4,798.40

Total Avg Daily Spend: $4,670.00

Overall Variance: +$128.40 (+2.7%)

Accounts Over Average: 2 accounts

Accounts Under Average: 2 accounts

#### Step 5: Error Handling

**Handle data limitations gracefully:**

- **No spend data:** If account shows $0 spend: "No spend recorded - verify campaigns are active"
 
- **No average available:** If less than 7 days of history: "Insufficient history to calculate average daily spend"
 
- **Account access issues:** Note: "\[Account Name\] - Unable to retrieve data (check permissions)"
 
- **Timezone discrepancy:** Note which timezone is used for "yesterday" calculation
 

#### Additional Context

**Default Time Period:** Yesterday (previous calendar day in account timezone)

**Average Daily Spend:** Calculated from last 30 days of spend history

**Variance Interpretation:**

- +/- 10%: Normal daily fluctuation
 
- +/- 10-20%: Moderate change, monitor
 
- +/- >20%: Significant change, investigate
 

#### Workflow Summary

1. **Ask Time Period** → Yesterday or Last 24 Hours from now
 
2. **Retrieve Data** → Get spend for selected period and 30-day average
 
3. **Calculate Variance** → Compute difference and percentage change
 
4. **Format Output** → Present simple table with summary totals
 
5. **Handle Errors** → Address missing data or access issues
 

**Output Goal:** A 15-second scan showing if yesterday's spend was normal or needs attention.

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

[![](https://framerusercontent.com/images/nBmrMSjNeEgESkLYj91mINtRgU.png?width=1600&height=900)](http://lemonado.io/./meta-ads-daily-spend-check)

[AI]()

[**Lemonado Start Guide**](http://lemonado.io/./meta-ads-daily-spend-check)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/j4IyobjX9HUlU099KuaHKFGz4.png?width=1600&height=900)](http://lemonado.io/./meta-ads-daily-spend-check)

[Marketing]()

[**Claude Skills for Paid Media with Lemonado MCP**](http://lemonado.io/./meta-ads-daily-spend-check)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/u5UPsOhDLNPAN6Q5GyzVynzlQyk.png?width=1600&height=900)](http://lemonado.io/./meta-ads-daily-spend-check)

[AI]()

[**Connect your Lemonado workspace to ChatGPT**](http://lemonado.io/./meta-ads-daily-spend-check)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

## Stop fighting with data. Start feeding your AI.

Connect your data to AI and free your team from reporting and busywork.

Sign up for newsletter

Sign up for newsletter

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)