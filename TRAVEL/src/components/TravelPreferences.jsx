
import { useState } from 'react';

function TravelPreferences({
    destinations,
    preferences,
    setPreferences
}) {
    const [form, setForm] = useState({
        name: '',
        travelType: 'Solo',
        budget: 'Budget',
        preferredDestination: ''
    });

    // HANDLE INPUT CHANGES
    function handleChange(e) {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    // SAVE NEW PREFERENCE CARD
    function handleSubmit(e) {
        e.preventDefault();

        const newPreference = {
    ...form,
    id: preferences.length + 1
};

        setPreferences((prev) => [
            ...prev,
            newPreference
        ]);

        alert('Preferences saved successfully!');

        setForm({
            name: '',
            travelType: 'Solo',
            budget: 'Budget',
            preferredDestination: ''
        });
    }

    // CLEAR FORM ONLY
    function clearForm() {
        setForm({
            name: '',
            travelType: 'Solo',
            budget: 'Budget',
            preferredDestination: ''
        });
    }

    // DELETE ONE CARD
    function deletePreference(id) {
        setPreferences((prev) =>
            prev.filter((item) => item.id !== id)
        );
    }

    // DELETE ALL CARDS
    function clearAllPreferences() {
        if (window.confirm('Delete all saved preferences?')) {
            setPreferences([]);
        }
    }

    return (
        <section
            className="bg-[linear-gradient(135deg,#ffffff,#f8fafc,#eef2ff)]
      rounded-[28px] p-7 md:p-9 mb-7
      border border-slate-200
      shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
        >
            <span
                className="text-[10px] font-bold uppercase tracking-[3px]
        bg-gradient-to-r from-purple-600 to-blue-600
        bg-clip-text text-transparent"
            >
                Personalize
            </span>

            <h2 className="font-serif text-[32px] font-semibold text-[#18212f] mt-2">
                Travel Preferences
            </h2>

            <p className="text-slate-500 text-sm mt-1 mb-7">
                Tell us about your travel preferences.
            </p>

            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1"
            >
                {/* NAME */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-700">
                        Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="h-[46px] px-3 rounded-xl outline-none
            bg-white border border-slate-200
            focus:border-purple-600 focus:ring-4 focus:ring-purple-100"
                    />
                </div>

                {/* TRAVEL TYPE */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-700">
                        Travel Type
                    </label>

                    <select
                        name="travelType"
                        value={form.travelType}
                        onChange={handleChange}
                        className="h-[46px] px-3 rounded-xl outline-none
            bg-white border border-slate-200
            focus:border-purple-600"
                    >
                        <option value="Solo">Solo</option>
                        <option value="Couple">Couple</option>
                        <option value="Family">Family</option>
                        <option value="Friends">Friends</option>
                    </select>
                </div>

                {/* BUDGET */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-700">
                        Budget
                    </label>

                    <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="h-[46px] px-3 rounded-xl outline-none
            bg-white border border-slate-200
            focus:border-purple-600"
                    >
                        <option value="Budget">Budget</option>
                        <option value="Standard">Standard</option>
                        <option value="Premium">Premium</option>
                    </select>
                </div>

                {/* DESTINATION */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-700">
                        Preferred Destination
                    </label>

                    <select
                        name="preferredDestination"
                        value={form.preferredDestination}
                        onChange={handleChange}
                        className="h-[46px] px-3 rounded-xl outline-none
            bg-white border border-slate-200
            focus:border-purple-600"
                    >
                        <option value="">Select destination</option>

                        {destinations.map((destination) => (
                            <option
                                key={destination.id}
                                value={destination.name}
                            >
                                {destination.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* BUTTONS */}
                <div className="col-span-2 flex flex-wrap gap-3 max-[700px]:col-span-1">
                    <button
                        type="submit"
                        className="px-6 py-3 rounded-xl
            bg-[linear-gradient(135deg,#4f46e5,#7c3aed,#2563eb)]
            text-white text-xs font-bold shadow-lg shadow-indigo-200
            hover:scale-105 transition-all duration-300
            max-[700px]:w-full"
                    >
                        Save Preferences
                    </button>

                    <button
                        type="button"
                        onClick={clearForm}
                        className="px-6 py-3 rounded-xl
            border border-slate-300 text-slate-700
            text-xs font-bold hover:bg-slate-100
            transition-all duration-300
            max-[700px]:w-full"
                    >
                        Clear Form
                    </button>
                </div>
            </form>

            {/* SAVED PREFERENCE CARDS */}
            <div className="mt-8">
                <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
                    <h3 className="font-serif text-2xl font-semibold text-slate-800">
                        Saved Preferences ({preferences.length})
                    </h3>

                    {preferences.length > 0 && (
                        <button
                            type="button"
                            onClick={clearAllPreferences}
                            className="px-4 py-2 rounded-xl
              bg-red-600 text-white text-xs font-bold
              hover:bg-red-700 transition-all"
                        >
                            Delete All
                        </button>
                    )}
                </div>

                {preferences.length === 0 ? (
                    <div className="p-6 rounded-2xl border border-dashed border-slate-300 text-center">
                        <p className="text-slate-500 text-sm">
                            No preferences saved yet. Fill the form and click Save Preferences.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {preferences.map((item) => (
                            <div
                                key={item.id}
                                className="p-5 rounded-2xl
                bg-[linear-gradient(135deg,#ecfdf5,#f0fdf4,#eff6ff)]
                border border-emerald-100
                shadow-md hover:shadow-xl
                transition-all duration-300"
                            >
                                <div className="flex justify-between items-start gap-3">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                                            Travel Profile
                                        </span>

                                        <h3 className="font-serif text-xl font-semibold text-emerald-900 mt-2 break-words">
                                            Welcome, {item.name}
                                        </h3>
                                    </div>

                                    <span className="text-2xl">✈️</span>
                                </div>

                                <div className="mt-4 space-y-3">
                                    <p className="text-slate-600 text-sm">
                                        <span className="font-bold text-slate-800">
                                            Travel Type:
                                        </span>{' '}
                                        {item.travelType}
                                    </p>

                                    <p className="text-slate-600 text-sm">
                                        <span className="font-bold text-slate-800">
                                            Budget:
                                        </span>{' '}
                                        {item.budget}
                                    </p>

                                    <p className="text-slate-600 text-sm break-words">
                                        <span className="font-bold text-slate-800">
                                            Destination:
                                        </span>{' '}
                                        {item.preferredDestination || 'Not Selected'}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => deletePreference(item.id)}
                                    className="mt-5 w-full px-4 py-2.5 rounded-xl
                  bg-[linear-gradient(135deg,#7f1d1d,#dc2626)]
                  text-white text-xs font-bold
                  hover:scale-[1.02] transition-all duration-300"
                                >
                                    Delete Card
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default TravelPreferences;