function Premium() {
    const isPremiumUser = true;

    return (
            <div>
            {isPremiumUser? (
                <p>Thank you for being a premium member!</p>
            ) : (
                <p> Upgrade to premium to enjoy exclusive features!</p>
            )}
            </div>

    );
}

export default Premium
