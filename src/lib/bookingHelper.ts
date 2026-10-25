export interface BookingOptions {
  pickup?: string;
  dest?: string;
  vehicle?: string;
}

export function openBookingModal(options?: BookingOptions) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("openBookingModalEvent", {
        detail: options || {},
      })
    );
  }
}
