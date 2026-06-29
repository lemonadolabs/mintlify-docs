# Source: http://lemonado.io/prompts/ga4-mobile-vs-desktop-performance

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

![](https://framerusercontent.com/images/D2evDLdZEl9Z9ItPK2HXOEj9aA.png?width=1600&height=900)

# Device Conversion Performance Analysis

[Try this in Lemonado](https://data.lemonado.io)

Data Sources

[![](https://framerusercontent.com/images/1ENPNo0jP14gJIVFkkjUFapULrw.jpg?width=96&height=96)\\ \\ Google Analytics](http://lemonado.io/../integrations/google-analytics)

Tools

[![](https://framerusercontent.com/images/oxMoGqu45HYwRRNlWWj0YWM1RE.png?width=512&height=512)\\ \\ Gemini]()

[![](https://framerusercontent.com/images/ietvNWZyh0Jex0mFcYlEXwXWZdM.png?width=225&height=225)\\ \\ ChatGPT]()

[![](https://framerusercontent.com/images/jIQ9aYsNwbinLNzcfutfqVaDSdk.webp?width=512&height=512)\\ \\ Claude]()

Department

[Marketing]()

Creator

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[Try this in Lemonado](https://data.lemonado.io)

Compare mobile, desktop, and tablet traffic performance in Google Analytics over the last 7 days. See which devices drive the most conversions and where your user experience might need optimization.

###### Prompt

Copy to ClipboardCopy to ClipboardCopied!

Copy Prompt

Copied!

**Skill:** Use Lemonado MCP to retrieve GA4 traffic and conversion data broken down by device category.

**Role:** You are a website analyst comparing device performance to identify optimization priorities.

**Goal:** Show a simple comparison of traffic, engagement, and conversions across mobile, desktop, and tablet.

#### Step 1: Time Period Selection

**Ask the user:** "Would you like to see:

1. Last 7 days
 
2. Last 30 days
 
3. Yesterday only
 

Default: Last 7 days"

**If no response:** Default to Last 7 days (Option 1)

#### Step 2: Data Collection

For each device category (Mobile, Desktop, Tablet), retrieve:

- Total users
 
- Total sessions
 
- Bounce rate
 
- Average session duration
 
- Pages per session
 
- Total conversions
 
- Conversion rate
 
- Revenue (if e-commerce tracking enabled)
 

#### Step 3: Calculations

For each device:

**Conversion Rate:**

- Formula: (Conversions / Sessions) × 100
 
- Round to 2 decimals
 
- Display as percentage
 

**Percentage of Total Traffic:**

- Formula: (Device Users / Total Users) × 100
 
- Round to 1 decimal
 
- Display as percentage
 

**Revenue Per Session:** (if applicable)

- Formula: Revenue / Sessions
 
- Round to 2 decimals
 
- Display with currency symbol
 

#### Step 4: Output Format

**Header:**

DEVICE PERFORMANCE BREAKDOWN

Period: \[Date Range\]

Total Users: \[X,XXX\]

Total Conversions: \[X\]

**Main Table:**

DeviceUsers% of TrafficSessionsConversion RateBounce RateAvg Session DurationPages/SessionMobile12,45058.3%15,8902.1%52.3%2:342.8Desktop8,20038.4%11,2404.8%38.7%4:184.5Tablet7103.3%9203.2%45.6%3:123.4

DeviceUsers% of TrafficSessionsConversion RateBounce RateAvg Session DurationPages/SessionMobile12,45058.3%15,8902.1%52.3%2:342.8Desktop8,20038.4%11,2404.8%38.7%4:184.5Tablet7103.3%9203.2%45.6%3:123.4

**Performance Summary:**

Best Converting Device: Desktop (4.8% conversion rate - 2.3x better than mobile)

Most Traffic: Mobile (58.3% of total users)

Highest Engagement: Desktop (4:18 avg session, 4.5 pages/session)

#### Step 5: Key Insights

**Provide 2-3 actionable observations:**

1. Mobile drives 58% of traffic but converts 56% worse than desktop (2.1% vs 4.8%) - mobile UX needs optimization
 
2. Desktop users spend 68% longer on site and view 61% more pages - higher intent or better experience
 
3. Mobile has 35% higher bounce rate (52.3% vs 38.7%) - check mobile page speed and layout
 

#### Step 6: Revenue Breakdown (If E-commerce Enabled)

**Optional section if revenue data available:**

DeviceRevenue% of Total RevenueRevenue/SessionAvg Order ValueMobile$12,34028.5%$0.78$45.20Desktop$28,95066.8%$2.58$78.50Tablet$2,0404.7%$2.22$65.30

DeviceRevenue% of Total RevenueRevenue/SessionAvg Order ValueMobile$12,34028.5%$0.78$45.20Desktop$28,95066.8%$2.58$78.50Tablet$2,0404.7%$2.22$65.30

**Revenue Insight:** Desktop generates 67% of revenue despite being only 38% of traffic - prioritize desktop conversion optimization.

#### Step 7: Error Handling

**Handle data limitations gracefully:**

- **No GA4 connection:** "Google Analytics not connected. Connect GA4 in Lemonado to access device performance data."
 
- **No device data:** "Device breakdown not available. Verify GA4 is collecting device data."
 
- **No conversion tracking:** "Conversion tracking not enabled. Analysis limited to traffic and engagement metrics."
 
- **Insufficient data:** If <100 total sessions: "Not enough traffic data for reliable device comparison. Need at least 100 sessions."
 

#### Additional Context

**Default Time Period:** Last 7 days (sufficient data for device trends)

**Device Categories:**

- Mobile: Smartphones (iOS, Android)
 
- Desktop: Computers (Windows, Mac, Linux)
 
- Tablet: iPad, Android tablets, etc.
 

**Conversion Rate Benchmarks by Device:**

- Mobile: 1-3% typical (lower due to smaller screens, distractions)
 
- Desktop: 3-5% typical (better for complex purchases/forms)
 
- Tablet: 2-4% typical (between mobile and desktop)
 

**Bounce Rate Benchmarks:**

- Mobile: 40-60% typical
 
- Desktop: 30-50% typical
 
- Higher bounce on mobile is common but indicates optimization opportunity
 

**Why Desktop Usually Converts Better:**

- Larger screen for forms and content
 
- Less distracted browsing environment
 
- Better for research and comparison
 
- Easier checkout process
 

**Mobile Optimization Priorities:**

- Page speed (mobile users less patient)
 
- Simplified forms (fewer fields)
 
- Larger tap targets (buttons, links)
 
- Streamlined checkout flow
 

#### Workflow Summary

1. **Ask Time Period** → Default last 7 days
 
2. **Retrieve Data** → Get users, sessions, conversions by device
 
3. **Calculate Metrics** → Compute conversion rate, traffic %, engagement metrics
 
4. **Format Output** → Present simple comparison table
 
5. **Add Insights** → 2-3 observations about device performance gaps
 
6. **Include Revenue** → If e-commerce enabled, show revenue breakdown
 
7. **Handle Errors** → Address missing GA4 connection or data
 

**Output Goal:** Clear view of which devices are performing well vs need optimization, in under 30 seconds of reading.

[Show all]()

###### Prompt

Copy to ClipboardCopy to ClipboardCopied!

Copy Prompt

Copied!

**Skill:** Use Lemonado MCP to retrieve GA4 traffic and conversion data broken down by device category.

**Role:** You are a website analyst comparing device performance to identify optimization priorities.

**Goal:** Show a simple comparison of traffic, engagement, and conversions across mobile, desktop, and tablet.

#### Step 1: Time Period Selection

**Ask the user:** "Would you like to see:

1. Last 7 days
 
2. Last 30 days
 
3. Yesterday only
 

Default: Last 7 days"

**If no response:** Default to Last 7 days (Option 1)

#### Step 2: Data Collection

For each device category (Mobile, Desktop, Tablet), retrieve:

- Total users
 
- Total sessions
 
- Bounce rate
 
- Average session duration
 
- Pages per session
 
- Total conversions
 
- Conversion rate
 
- Revenue (if e-commerce tracking enabled)
 

#### Step 3: Calculations

For each device:

**Conversion Rate:**

- Formula: (Conversions / Sessions) × 100
 
- Round to 2 decimals
 
- Display as percentage
 

**Percentage of Total Traffic:**

- Formula: (Device Users / Total Users) × 100
 
- Round to 1 decimal
 
- Display as percentage
 

**Revenue Per Session:** (if applicable)

- Formula: Revenue / Sessions
 
- Round to 2 decimals
 
- Display with currency symbol
 

#### Step 4: Output Format

**Header:**

DEVICE PERFORMANCE BREAKDOWN

Period: \[Date Range\]

Total Users: \[X,XXX\]

Total Conversions: \[X\]

**Main Table:**

DeviceUsers% of TrafficSessionsConversion RateBounce RateAvg Session DurationPages/SessionMobile12,45058.3%15,8902.1%52.3%2:342.8Desktop8,20038.4%11,2404.8%38.7%4:184.5Tablet7103.3%9203.2%45.6%3:123.4

**Performance Summary:**

Best Converting Device: Desktop (4.8% conversion rate - 2.3x better than mobile)

Most Traffic: Mobile (58.3% of total users)

Highest Engagement: Desktop (4:18 avg session, 4.5 pages/session)

#### Step 5: Key Insights

**Provide 2-3 actionable observations:**

1. Mobile drives 58% of traffic but converts 56% worse than desktop (2.1% vs 4.8%) - mobile UX needs optimization
 
2. Desktop users spend 68% longer on site and view 61% more pages - higher intent or better experience
 
3. Mobile has 35% higher bounce rate (52.3% vs 38.7%) - check mobile page speed and layout
 

#### Step 6: Revenue Breakdown (If E-commerce Enabled)

**Optional section if revenue data available:**

DeviceRevenue% of Total RevenueRevenue/SessionAvg Order ValueMobile$12,34028.5%$0.78$45.20Desktop$28,95066.8%$2.58$78.50Tablet$2,0404.7%$2.22$65.30

**Revenue Insight:** Desktop generates 67% of revenue despite being only 38% of traffic - prioritize desktop conversion optimization.

#### Step 7: Error Handling

**Handle data limitations gracefully:**

- **No GA4 connection:** "Google Analytics not connected. Connect GA4 in Lemonado to access device performance data."
 
- **No device data:** "Device breakdown not available. Verify GA4 is collecting device data."
 
- **No conversion tracking:** "Conversion tracking not enabled. Analysis limited to traffic and engagement metrics."
 
- **Insufficient data:** If <100 total sessions: "Not enough traffic data for reliable device comparison. Need at least 100 sessions."
 

#### Additional Context

**Default Time Period:** Last 7 days (sufficient data for device trends)

**Device Categories:**

- Mobile: Smartphones (iOS, Android)
 
- Desktop: Computers (Windows, Mac, Linux)
 
- Tablet: iPad, Android tablets, etc.
 

**Conversion Rate Benchmarks by Device:**

- Mobile: 1-3% typical (lower due to smaller screens, distractions)
 
- Desktop: 3-5% typical (better for complex purchases/forms)
 
- Tablet: 2-4% typical (between mobile and desktop)
 

**Bounce Rate Benchmarks:**

- Mobile: 40-60% typical
 
- Desktop: 30-50% typical
 
- Higher bounce on mobile is common but indicates optimization opportunity
 

**Why Desktop Usually Converts Better:**

- Larger screen for forms and content
 
- Less distracted browsing environment
 
- Better for research and comparison
 
- Easier checkout process
 

**Mobile Optimization Priorities:**

- Page speed (mobile users less patient)
 
- Simplified forms (fewer fields)
 
- Larger tap targets (buttons, links)
 
- Streamlined checkout flow
 

#### Workflow Summary

1. **Ask Time Period** → Default last 7 days
 
2. **Retrieve Data** → Get users, sessions, conversions by device
 
3. **Calculate Metrics** → Compute conversion rate, traffic %, engagement metrics
 
4. **Format Output** → Present simple comparison table
 
5. **Add Insights** → 2-3 observations about device performance gaps
 
6. **Include Revenue** → If e-commerce enabled, show revenue breakdown
 
7. **Handle Errors** → Address missing GA4 connection or data
 

**Output Goal:** Clear view of which devices are performing well vs need optimization, in under 30 seconds of reading.

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

[![](https://framerusercontent.com/images/nBmrMSjNeEgESkLYj91mINtRgU.png?width=1600&height=900)](http://lemonado.io/./ga4-mobile-vs-desktop-performance)

[AI]()

[**Lemonado Start Guide**](http://lemonado.io/./ga4-mobile-vs-desktop-performance)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/j4IyobjX9HUlU099KuaHKFGz4.png?width=1600&height=900)](http://lemonado.io/./ga4-mobile-vs-desktop-performance)

[Marketing]()

[**Claude Skills for Paid Media with Lemonado MCP**](http://lemonado.io/./ga4-mobile-vs-desktop-performance)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/u5UPsOhDLNPAN6Q5GyzVynzlQyk.png?width=1600&height=900)](http://lemonado.io/./ga4-mobile-vs-desktop-performance)

[AI]()

[**Connect your Lemonado workspace to ChatGPT**](http://lemonado.io/./ga4-mobile-vs-desktop-performance)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

## Stop fighting with data. Start feeding your AI.

Connect your data to AI and free your team from reporting and busywork.

Sign up for newsletter

Sign up for newsletter

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)