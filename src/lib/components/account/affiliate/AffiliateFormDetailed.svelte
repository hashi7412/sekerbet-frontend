<script>
    export let affiliateLink = "https://www.website.com/?aff=54530970";
    export let visitorCount = 13435;
    export let registerCount = 1423;
    export let playerDeposit = 234765.87;
    export let playerWithdraw = 198823.74;
    export let affiliateEarning = 8760.00;
    export let affiliateWithdraw = 7250.00;
</script>

<style>
    .affiliate-details {
        z-index: 1000;
        padding: 20px;
        max-width: 600px;
        margin: auto;
        border: 1px solid #232b2f;
        border-radius: 8px;
        background-color: #ffffff;
        color: #3d4b51;
    }
    .affiliate-details h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #232b2f;
    }
    .details-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
    .details-grid div {
        background-color: #3d4b51;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
        color: #ffffff;
    }
    .details-grid div span {
        display: block;
        margin-top: 5px;
        font-weight: bold;
    }
    .link {
        text-align: center;
        margin-bottom: 20px;
    }
    .link a {
        color: #fbcf44;
        text-decoration: none;
    }
    .link a:hover {
        text-decoration: underline;
    }
    .green-text {
        color: #bdefd7;
    }
    .red-text {
        color: #fbcf44;
    }
    .blue-text {
        color: #fbcf44;
    }
</style>

<div class="affiliate-details">
    <div class="link">
        <h2>Affiliate Details</h2>
        <a href={affiliateLink} target="_blank">{affiliateLink}</a>
    </div>
    <div class="details-grid">
        <div>
            Visitor Count
            <span class="blue-text">{visitorCount}</span>
        </div>
        <div>
            Register Count
            <span class="blue-text">{registerCount}</span>
        </div>
        <div>
            Aff. Player Deposit
            <span class="green-text">{playerDeposit.toLocaleString()}₺</span>
        </div>
        <div>
            Aff. Player Withdraw
            <span class="red-text">{playerWithdraw.toLocaleString()}₺</span>
        </div>
        <div>
            Affiliate Earning
            <span class="blue-text">{affiliateEarning.toLocaleString()}₺</span>
        </div>
        <div>
            Affiliate Withdraw
            <span class="red-text">{affiliateWithdraw.toLocaleString()}₺</span>
        </div>
    </div>
</div>
